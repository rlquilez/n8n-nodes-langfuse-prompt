# Changelog v1.2.0 - Full Text Search Feature

## 🎉 What's New in v1.2.0

### ✨ Full Text Search Implementation

Implementei a funcionalidade de **busca full text** na operação **List Prompts**, igual à interface WEB do Langfuse!

### 🔍 New Search Parameters

#### `Search Query`
- **Tipo**: String
- **Descrição**: Pesquisa texto em nomes de prompts, tags e conteúdo (busca full text)
- **Exemplo**: "customer support", "temperature", "You are a helpful assistant"

#### `Search Type`
- **Tipo**: Options (dropdown)
- **Opções**:
  - **Names & Tags** (`id`): Busca apenas em nomes e tags (mais rápido)
  - **Full Text** (`content`): Busca em todos os campos incluindo conteúdo (abrangente)
  - **Both** (`both`): Busca em metadados e conteúdo simultaneamente
- **Display Logic**: Aparece apenas quando `Search Query` não está vazio

### 🚀 API Integration Details

A implementação utiliza os parâmetros suportados pela API do Langfuse v2:

- `searchQuery`: String de busca
- `searchType`: Array de tipos de busca (`["id"]`, `["content"]`, ou `["id", "content"]`)

### 📝 Como Usar

1. **Busca Simples**:
   - Digite o termo no campo `Search Query`
   - Por padrão, busca em nomes e tags

2. **Busca Full Text**:
   - Digite o termo no campo `Search Query`
   - Selecione "Full Text" no `Search Type`
   - Busca em todo o conteúdo dos prompts

3. **Busca Completa**:
   - Digite o termo no campo `Search Query`
   - Selecione "Both" no `Search Type`
   - Busca em metadados E conteúdo

### 📚 Examples

**Buscar prompts sobre atendimento ao cliente:**
```json
{
  "searchQuery": "customer support",
  "searchType": "content"
}
```

**Buscar prompts com configuração de temperatura:**
```json
{
  "searchQuery": "temperature",
  "searchType": "both"
}
```

**Buscar prompts de chatbot:**
```json
{
  "searchQuery": "chatbot",
  "searchType": "id"
}
```

### 🎯 Benefits

- **Same as Langfuse Web**: Mesma experiência de busca da interface web
- **Performance Options**: Escolha entre busca rápida (metadados) ou completa (full text)
- **Flexible**: Combina busca de texto com outros filtros (name, tag, label)
- **User-Friendly**: Interface intuitiva que só mostra opções quando necessário

### 💻 Technical Implementation

- Baseado na análise do código fonte do Langfuse
- Utiliza os endpoints públicos `/api/public/v2/prompts` com parâmetros de busca
- Implementado com conditional display para UX otimizada
- Suporte completo para busca case-insensitive

### 📦 Installation

```bash
npm install n8n-nodes-langfuse-prompt@1.2.0
```

### 🔗 Links

- **npm Package**: https://www.npmjs.com/package/n8n-nodes-langfuse-prompt
- **GitHub Repository**: https://github.com/rlquilez/n8n-nodes-langfuse-prompt
- **Langfuse Documentation**: https://langfuse.com/docs/prompt-management

---

**Versão publicada**: 1.2.0  
**Data**: 24 de Setembro de 2025  
**Status**: ✅ Disponível no npm registry