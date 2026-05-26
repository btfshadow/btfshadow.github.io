# Configuração da Issue do GitHub no Formulário de Contato

## Visão Geral

O formulário de contato foi atualizado para criar automaticamente uma issue no GitHub quando um usuário envia uma mensagem. Isso permite que você gerencie todas as solicitações de contato diretamente através do sistema de issues do GitHub.

## Como Funciona

1. O usuário preenche o formulário com:
   - Nome
   - Email
   - Tipo de Quest (QA Audit, AI Workshop, Mentorship, etc.)
   - Detalhes da mensagem

2. Ao enviar, a função `createGitHubIssue()` é chamada e:
   - Cria uma nova issue no repositório configurado
   - Adiciona labels automáticas: `contact-form`, `<tipo-da-quest>`, `quest-request`
   - Inclui todas as informações do formulário no corpo da issue
   - Retorna um link para a issue criada

3. O usuário vê uma mensagem de sucesso com o link para a issue criada

## Configuração Necessária

### 1. Token de Acesso do GitHub (Opcional para repositórios públicos)

Para criar issues em repositórios **públicos**, você não precisa de autenticação. No entanto, para repositórios **privados** ou para ter limites maiores de requisição, você precisará de um token.

#### Como criar um token:

1. Vá para [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome descritivo (ex: "Portfolio Contact Form")
4. Marque a scope `public_repo` (para repositórios públicos) ou `repo` (para privados)
5. Clique em "Generate token"
6. **Copie o token imediatamente** - você não poderá vê-lo novamente!

### 2. Configurar Owner e Repository

No arquivo `index.html`, localize a função `createGitHubIssue` (linha ~1160) e atualize:

```javascript
const githubOwner = 'btfshadow'; // Seu username do GitHub
const githubRepo = 'portfolio';  // Nome do seu repositório
```

**Importante:** Substitua pelos valores corretos do seu repositório!

### 3. Adicionar Token (Opcional - necessário apenas para repositórios privados)

Para repositórios **públicos**, não é necessário token. Para repositórios **privados**:

#### Opção A: Definir no JavaScript (apenas para testes locais)

No arquivo `index.html`, logo no início da função `createGitHubIssue`, adicione:

```javascript
// ⚙️ CONFIGURAÇÃO DO GITHUB
// Descomente e substitua pelo seu token (apenas para testes locais!)
window.GITHUB_TOKEN = 'ghp_SEU_TOKEN_AQUI';
```

**Localização:** Linha ~1157-1160 do `index.html`

Exemplo completo:
```javascript
// ⚙️ CONFIGURAÇÃO DO GITHUB
// Para usar token (necessário para repos privados ou evitar rate limits):
window.GITHUB_TOKEN = 'ghp_abc123xyz456...'; // Substitua pelo seu token real
```

#### Opção B: Backend Proxy (Recomendado para produção)

Crie um endpoint no seu servidor que recebe o formulário e cria a issue (ver exemplo no final deste documento).

⚠️ **Atenção:** Nunca exponha tokens no código frontend em produção!

## Estrutura da Issue Criada

Cada issue terá:

- **Título:** `🎮 Quest Request: <tipo> - <nome>`
- **Labels:** `contact-form`, `<tipo-da-quest>`, `quest-request`
- **Corpo:**
```markdown
## New Quest Request

**Trainer:** <nome>
**Email:** <email>
**Quest Type:** <tipo>

**Quest Details:**
<mensagem>

---
*Submitted via portfolio contact form on <data/hora>*
```

## Tratamento de Erros

O código inclui tratamento robusto de erros:

- Validação de campos obrigatórios
- Validação de formato de email
- Feedback visual durante o envio (estado de loading)
- Mensagens de erro claras se a criação da issue falhar
- Botão desabilitado durante o envio para prevenir múltiplos submissions

## Testando Localmente

1. Abra o `index.html` no navegador
2. Preencha o formulário com dados de teste
3. Envie o formulário
4. Verifique no console do navegador (F12) se há erros
5. Se configurado corretamente, verifique no GitHub se a issue foi criada

## Limitações e Considerações

### Rate Limiting do GitHub API

- **Sem autenticação:** 60 requisições por hora por IP
- **Com autenticação:** 5000 requisições por hora por usuário

### CORS

A API do GitHub suporta CORS, então não há problemas em chamar diretamente do navegador.

### Segurança

- Para repositórios públicos, qualquer pessoa pode criar issues sem autenticação
- Considere implementar validação adicional ou CAPTCHA se receber spam
- Nunca exponha tokens de escrita no código frontend em produção

## Alternativas para Produção

Para uso em produção, considere:

1. **Backend Proxy:** Criar um endpoint no seu servidor que recebe o formulário e cria a issue
2. **GitHub Actions:** Usar workflows para processar issues automaticamente
3. **Serviços de Forms:** Usar serviços como Formspree, Netlify Forms, etc.
4. **Validação Server-side:** Implementar validação adicional no backend

## Exemplo de Backend Proxy (Node.js/Express)

```javascript
app.post('/api/contact', async (req, res) => {
  const { name, email, type, message } = req.body;
  
  const response = await fetch('https://api.github.com/repos/OWNER/REPO/issues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      title: `🎮 Quest Request: ${type} - ${name}`,
      body: `## New Quest Request\n\n**Trainer:** ${name}\n**Email:** ${email}\n**Quest Type:** ${type}\n\n**Quest Details:**\n${message}`,
      labels: ['contact-form', type]
    })
  });
  
  const issue = await response.json();
  res.json({ success: true, issueUrl: issue.html_url });
});
```

## Suporte

Se encontrar problemas:

1. Verifique o console do navegador para erros
2. Confirme que owner e repo estão corretos
3. Teste a API do GitHub manualmente com curl ou Postman
4. Verifique os limites de rate limiting
5. Para repositórios privados, confirme que o token tem as permissões corretas
