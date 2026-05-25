# DevDex - Dynamic Pokémon-Style Portfolio (Multi-language)

Um portfólio de desenvolvedor com temática de Pokédex Gen 2/3, usando dados dinâmicos via JSON com suporte a **3 idiomas** (Português, Inglês, Japonês).

## 🌐 Multi-language Support

O site suporta 3 idiomas com fallback automático:
- **🇧🇷 Português (pt)** - Idioma padrão
- **🇺🇸 English (en)** 
- **🇯🇵 日本語 (ja)**

Cada idioma tem seus próprios arquivos JSON na pasta `data/{lang}/`. Se um arquivo não existir no idioma selecionado, o sistema busca em português → inglês → raiz.

## 📁 Estrutura do Projeto

```
/workspace
├── index.html              # Arquivo principal
├── data/                   # Dados dinâmicos (JSON)
│   ├── i18n-pt.json        # Traduções UI - Português
│   ├── i18n-en.json        # Traduções UI - English
│   ├── i18n-ja.json        # Traduções UI - 日本語
│   ├── pt/                 # Dados em Português
│   │   ├── trainer.json
│   │   ├── skills.json
│   │   ├── experiences.json
│   │   ├── education.json
│   │   ├── courses.json
│   │   ├── certifications.json
│   │   ├── projects.json
│   │   └── blog.json
│   ├── en/                 # Dados em Inglês
│   │   └── ... (mesmos arquivos)
│   ├── ja/                 # Dados em Japonês
│   │   └── ... (mesmos arquivos)
│   └── *.json              # Fallback na raiz (opcional)
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
| `education.json` | `school`, `degree`, `period`, `status` (completed/incomplete) |
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

## 🎓 Main Quests (Educação)

Formato dos dados de educação (estilo prédios/ginásios):

```json
{
  "school": "Nome da Instituição",
  "degree": "Nome do Curso/Formação",
  "period": "2018 - 2022",
  "icon": "🏛️",
  "status": "completed"  // ou "incomplete"
}
```

**Status:**
- `completed` → Badge verde com "✓ Completed"
- `incomplete` → Badge vermelho com "○ In Progress"

**Layout:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna
- Hover: Eleva o card + glow roxo

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

1. Abra `data/{lang}/skills.json` no idioma desejado
2. Adicione um novo objeto:

```json
{
  "name": "Nome da Skill",
  "level": 8,           // 1-15 (anos de experiência ≈ nível)
  "state": "active",    // active | studied | seen
  "isMain": true,       // Aparece nos cards principais?
  "icon": "⚡",
  "moveset": ["Sub-skill 1", "Sub-skill 2"]
}
```

3. **Importante:** Adicione em TODOS os arquivos de idioma (`pt/`, `en/`, `ja/`) para manter consistência

## 🌐 Adicionar Tradução em Novo Idioma

1. Crie pasta `data/{lang}/`
2. Copie todos os JSONs de `data/pt/` para `data/{lang}/`
3. Traduza os conteúdos
4. Adicione arquivo `data/i18n-{lang}.json` com as traduções da UI
5. Atualize o HTML adicionando botão no `.lang-buttons`

## 🔧 Pipeline de Validação

O sistema valida automaticamente:
- Campos obrigatórios
- Tipos de dados
- Valores enum (state, status, rarity)

Se falhar, usa fallback em cascata:
```
data/{currentLang}/{file}.json
  ↓ (se falhar)
data/pt/{file}.json
  ↓ (se falhar)
data/en/{file}.json
  ↓ (se falhar)
data/{file}.json
  ↓ (se falhar)
Fallback hardcoded no JS
```

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

## 🎓 Main Quests (Educação)

Formato dos dados de educação (estilo prédios/ginásios):

```json
{
  "school": "Nome da Instituição",
  "degree": "Nome do Curso/Formação",
  "period": "2018 - 2022",
  "icon": "🏛️",
  "status": "completed"  // ou "incomplete"
}
```

**Status:**
- `completed` → Badge verde com "✓ Completed"
- `incomplete` → Badge vermelho com "○ In Progress"

**Layout:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna
- Hover: Eleva o card + glow roxo

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
- ✅ `"✅ Loaded data/pt/trainer.json"` → Tudo OK
- ⚠️ `"⚠️ Could not load data/..."` → JSON não encontrado (tentando próximo idioma)
- ❌ `"❌ All language paths failed"` → Usando fallback hardcoded

## 📦 Estrutura Completa dos Dados

### Trainer (`trainer.json`)
```json
{
  "name": "Nome",
  "title": "Cargo",
  "type": "Especialidade",
  "region": "Localização",
  "avatar": "👩‍💻",
  "description": "Resumo profissional",
  "contact": {
    "email": "email@exemplo.com",
    "linkedin": "https://linkedin.com/in/user",
    "github": "https://github.com/user",
    "portfolio": "https://site.dev"
  }
}
```

### Projects & Blog (com links)
```json
{
  "title": "Nome do Projeto",
  "description": "Descrição",
  "tags": ["Tag1", "Tag2"],
  "icon": "🎮",
  "links": {
    "github": "https://github.com/user/repo",
    "article": "https://medium.com/artigo"
  }
}
```
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
