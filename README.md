# DevDex - Dynamic Pokémon-Style Portfolio

Um portfólio de desenvolvedor com temática de Pokédex Gen 2/3, usando dados dinâmicos via JSON.

## 📁 Estrutura do Projeto

```
/workspace
├── index.html              # Arquivo principal
├── data/                   # Dados dinâmicos (JSON)
│   ├── trainer.json        # Perfil do treinador
│   ├── skills.json         # Habilidades (skills)
│   ├── experiences.json    # Experiências profissionais (Gym Badges)
│   ├── education.json      # Formação acadêmica
│   ├── courses.json        # Cursos
│   ├── certifications.json # Certificações
│   ├── projects.json       # Projetos pessoais
│   └── blog.json           # Posts do blog
└── README.md               # Este arquivo
```

## 🚀 Como Usar

### 1. Editar Dados

Basta modificar os arquivos JSON na pasta `data/`. Exemplo:

**`data/trainer.json`:**
```json
{
  "name": "Seu Nome",
  "title": "Seu Cargo",
  "type": "Sua Especialidade",
  "region": "Sua Localização",
  "avatar": "👨‍💻",
  "description": "Sua descrição profissional"
}
```

**`data/skills.json`:**
```json
[
  {
    "name": "JavaScript",
    "level": 12,              // 1-15 (anos de experiência ≈ nível)
    "state": "active",        // active | studied | seen
    "isMain": true,           // Aparece nos cards principais?
    "icon": "⚡",
    "moveset": ["ES6+", "React", "Node"]  // Sub-skills
  }
]
```

### 2. Schema de Validação

O sistema valida automaticamente cada arquivo JSON. Campos obrigatórios:

| Arquivo | Campos Obrigatórios |
|---------|---------------------|
| `trainer.json` | `name`, `title`, `type`, `region`, `avatar` |
| `skills.json` | `name`, `level`, `state`, `isMain` |
| `experiences.json` | `company`, `role`, `period`, `summary` |
| `education.json` | `school`, `degree`, `period` |
| `courses.json` | `title`, `provider`, `year` |
| `certifications.json` | `name`, `issuer`, `year` |
| `projects.json` | `title`, `description`, `tags` |
| `blog.json` | `title`, `date`, `excerpt` |

### 3. Fallback Automático

Se um arquivo JSON:
- Não existir
- Estiver mal formatado
- Falhar na validação do schema

O sistema usa **dados de fallback** hardcoded no JavaScript, garantindo que o site nunca quebre.

## 🎮 Estados das Skills

- **`active`**: Uso diário → Borda verde + glow + Pokéball
- **`studied`**: Estudado/Curso → Borda azul + negrito
- **`seen`**: Conhece superficialmente → Opacidade reduzida + grayscale

## 🏆 Gym Badges (Experiências)

Raridades disponíveis:
- `legendary` → Amarelo/dourado
- `elite` → Roxo
- `rare` → Azul
- `common` → Cinza

## 🌐 Deploy no GitHub Pages

1. **Renomeie** (opcional): `index.html` já está pronto
2. **Edite** os JSONs na pasta `data/`
3. **Push** para seu repositório GitHub
4. **Ative** GitHub Pages:
   - Settings → Pages → Source: `main branch` → Save
5. **Acesse**: `https://seu-usuario.github.io/seu-repo`

### ✅ Compatibilidade

- **GitHub Pages**: 100% compatível (site estático)
- **Vercel**: Também funciona, mas não necessário para este caso
- **Netlify**: Funciona perfeitamente

## 🎨 Personalização

### Cores (CSS Variables)

No `<style>` do `index.html`, edite `:root`:

```css
:root {
  --bg: #0a0a0f;          /* Fundo principal */
  --bg-card: #111827;     /* Fundo dos cards */
  --purple: #7c3aed;      /* Cor primária */
  --cherry: #dc2626;      /* Detalhes vermelhos */
  --yellow: #fbbf24;      /* Dourado/títulos */
  --blue: #3b82f6;        /* Links/destaques */
  --green: #10b981;       /* Skills ativas */
}
```

### Fonts

Já incluídas via Google Fonts:
- **VT323**: Títulos e UI (estilo pixel)
- **Fira Code**: Corpo do texto (monospace)

## ♿ Acessibilidade

- ✅ Contraste ≥ 4.5:1
- ✅ ARIA labels em todos os elementos interativos
- ✅ Navegação por teclado (Tab, Enter, Escape)
- ✅ `prefers-reduced-motion` respeitado
- ✅ HTML semântico

## 📱 Responsividade

| Breakpoint | Layout |
|------------|--------|
| > 1024px | 4 colunas (Gym Badges) |
| 768-1024px | 2 colunas |
| < 768px | 1 coluna (mobile) |
| < 480px | PC Box com 2 colunas |

## 🔧 Debug

Abra o Console do navegador (F12) para ver:
- ✅ `"✅ DevDex initialized successfully"` → Tudo OK
- ⚠️ `"⚠️ Could not load data/..."` → JSON não encontrado (usando fallback)
- ❌ `"❌ ... failed validation"` → Schema inválido (usando fallback)

## 📝 Adicionar Nova Skill

1. Abra `data/skills.json`
2. Adicione um novo objeto:
```json
{
  "name": "Nova Skill",
  "level": 5,
  "state": "studied",
  "isMain": false,
  "icon": "🆕",
  "moveset": ["Sub-skill 1", "Sub-skill 2"]
}
```
3. Salve e recarregue a página!

## 📝 Adicionar Novo Post no Blog

1. Abra `data/blog.json`
2. Adicione no início do array:
```json
{
  "title": "Título do Post",
  "date": "2024-01-20",
  "excerpt": "Resumo do post...",
  "icon": "📝"
}
```
3. Salve e recarregue!

---

**Criado com ❤️ e nostalgia Pokémon**
