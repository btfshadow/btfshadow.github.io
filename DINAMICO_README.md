# 🎮 Pokédex Portfolio - Dynamic Data Guide

## ✅ Implementado: Carregamento Dinâmico via JSON

Seu portfolio agora lê **todas as informações de um arquivo JSON externo** (`skills.json`), permitindo atualizações rápidas sem mexer no HTML!

---

## 📁 Estrutura do Projeto

```
/workspace/
├── index.html          # Template principal (não precisa editar)
├── skills.json         # SEUS DADOS (edite aqui!)
└── README.md           # Este arquivo
```

---

## 🚀 Como Funciona

1. **Ao carregar a página**, o JavaScript busca `skills.json` automaticamente
2. **Todos os dados** (trainer, skills, gym badges) vêm do JSON
3. **Fallback automático**: Se o JSON falhar (ex: abrir direto do arquivo), usa dados embutidos
4. **GitHub Pages/Vercel**: Funciona perfeitamente em produção!

---

## ✏️ Como Editar Seus Dados

### 1. **Perfil do Trainer** (seção superior)

Edite em `skills.json`:
```json
"trainer": {
  "name": "Sophia Simões",
  "title": "Staff QA Engineer & Developer",
  "type": "Automation / AI / DevSecOps",
  "region": "São Paulo, Brazil",
  "description": "Sua descrição aqui...",
  "avatar": ""  // URL da sua foto (opcional)
}
```

### 2. **Skills Principais** (Captured Pokémon - top 6)

```json
"mainSkills": [
  {
    "id": "test-auto",              // ID único
    "name": "Test Automation",      // Nome da skill
    "type": "QA Engineering",       // Tipo/especialização
    "icon": "🤖",                   // Emoji
    "level": 10,                    // Nível 1-15 (1 ano ≈ 1 nível)
    "state": "active",              // active | studied | seen
    "moveset": ["Appium", "Selenium"],  // Sub-skills
    "description": "Descrição..."   // Descrição no modal
  }
  // ... até 6 skills
]
```

### 3. **Todas as Skills** (PC Box grid)

```json
"allSkills": [
  {
    "id": "java",
    "name": "Java",
    "type": "Backend",
    "icon": "☕",
    "level": 6,
    "state": "active",
    "moveset": ["Spring Boot", "JUnit", "Maven", "Gradle"],
    "description": "Legado e sistemas corporativos."
  }
  // ... quantas skills quiser
]
```

### 4. **Gym Badges** (Experiências profissionais)

```json
"gymBadges": [
  {
    "company": "Pagar.me",
    "role": "Staff QA Engineer",
    "period": "2021 - Presente",
    "type": "Legendary",        // Legendary | Elite | Rare | Common | Mystic
    "icon": "⚡",
    "summary": "Resumo das conquistas..."
  }
  // ... todas as experiências (grid 4 por linha)
]
```

---

## 🎯 Estados das Skills

| Estado   | Visual                              | Quando usar                |
|----------|-------------------------------------|----------------------------|
| `active` | Bordas verdes + glow                | Usa diariamente            |
| `studied`| Bordas azuis + gradiente            | Estudou/treinou            |
| `seen`   | Opacidade reduzida + cinza          | Já ouviu falar             |

---

## 📊 Níveis (Level System)

- **1 ano de experiência ≈ 1 nível**
- **Máximo: 15** (equivalente a 15+ anos)
- A barra de progresso é calculada automaticamente: `(level / 15) * 100%`

Exemplo:
```json
"level": 8  // ≈ 8 anos de experiência (53% da barra)
```

---

## 🔧 Tipos de Gym Badges

| Tipo        | Cor        | Quando usar              |
|-------------|------------|--------------------------|
| `Legendary` | Amarelo    | Empresa atual/Principal  |
| `Elite`     | Roxo       | Empresas de destaque     |
| `Rare`      | Azul       | Experiências relevantes  |
| `Common`    | Cinza      | Experiências iniciais    |
| `Mystic`    | Vermelho   | Freelance/Projetos       |

---

## 🌐 Deploy no GitHub Pages

### Passo a passo:

1. **Suba os arquivos** para seu repositório:
   ```bash
   git add index.html skills.json
   git commit -m "Update portfolio data"
   git push origin main
   ```

2. **Ative o GitHub Pages**:
   - Settings → Pages
   - Source: `main branch`
   - Save

3. **Pronto!** Seu site estará em `https://seu-usuario.github.io/seu-repo/`

### ⚠️ Importante:
- O JSON **só funciona via HTTP/HTTPS** (não abre direto do arquivo)
- GitHub Pages já serve via HTTPS automaticamente
- Teste localmente com: `python3 -m http.server 8080`

---

## 🔄 Atualizar Dados

Sempre que editar `skills.json`:

1. **Commit e push**:
   ```bash
   git add skills.json
   git commit -m "Update skills"
   git push
   ```

2. **Aguarde 1-2 minutos** para o GitHub Pages atualizar

3. **Refresh na página** (Ctrl+F5 para limpar cache)

---

## 🎨 Adicionar Nova Skill

1. Copie uma skill existente em `skills.json`
2. Cole após a última skill (antes do `]`)
3. Adicione vírgula `,` na skill anterior
4. Mude `id`, `name`, e outros campos
5. Defina `isMain: true` se quiser nos "Captured Pokémon" (top 6)

Exemplo:
```json
{
  "id": "nova-skill",
  "name": "Minha Nova Skill",
  "type": "Categoria",
  "icon": "🆕",
  "level": 5,
  "state": "studied",
  "moveset": ["Ferramenta1", "Ferramenta2"],
  "description": "Descrição da skill."
}
```

---

## 🐛 Troubleshooting

### "Dados não carregam"
- ✅ Verifique se está rodando em servidor (não abra direto do arquivo)
- ✅ Confira se `skills.json` está na mesma pasta que `index.html`
- ✅ Abra o console (F12) para ver erros

### "JSON inválido"
- ✅ Use [JSONLint](https://jsonlint.com/) para validar
- ✅ Verifique vírgulas finais e aspas duplas

### "Skills não aparecem"
- ✅ Confira se `mainSkills` tem até 6 itens
- ✅ Verifique se `allSkills` está preenchido

---

## 📝 Dicas Pro

1. **Mantenha o JSON válido**: Um erro quebra tudo
2. **Use emojis consistentes**: Cada skill deve ter um ícone único
3. **Níveis realistas**: Não coloque tudo no nível 15
4. **Descrições curtas**: Modal tem espaço limitado
5. **Teste mobile**: Grid se adapta automaticamente

---

## 🎉 Pronto!

Agora você pode atualizar seu portfolio **editando apenas um arquivo JSON**! 🚀

Qualquer dúvida, consulte este README ou o console do navegador.
