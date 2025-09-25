# 🚀 n8n-nodes-langfuse-prompt

<div align="center">

**Enhanced Langfuse integration for n8n with advanced Prompt Management features**

[![npm version](https://badge.fury.io/js/n8n-nodes-langfuse-prompt.svg)](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20## 📈 Version History

### v1.3.2 - Documentation Consistency & Structure Fix
- 🗂️ **Cleaned Documentation** - Removed duplicated version history from top section
- 🔧 **Fixed References** - Removed obsolete "Include Description" parameter references
- 📝 **Complete History** - Updated version history with all missing releases (v1.3.1, v1.3.0, v1.2.0)
- 🎯 **Consistency** - Ensured documentation matches actual node functionality
- 📋 **Table of Contents** - Added MCP Server Integration section to navigation

### v1.3.1 - Documentation & Description Corrections
- 🔧 **Accurate Descriptions** - Corrected misleading references to "CRUD operations" and "Update/Delete" functionality
- 📝 **Honest Documentation** - Updated all descriptions to accurately reflect only supported operations (Get, List, Create)
- ✅ **Transparency** - Clear explanation of API limitations and supported operations
- 🎯 **Focused Messaging** - Emphasize what the node does well rather than unsupported features

### v1.3.0 - MCP Integration & UI Improvements
- 🤖 **MCP Server Integration** - Added `usableAsTool: true` for compatibility with n8n's Model Context Protocol (MCP) workflows
- 🔍 **Full Text Search** - Enhanced List Prompts with comprehensive search capabilities (Names & Tags, Full Text, Both)
- 🎯 **Streamlined UI** - Removed optional "Include Description" checkbox from List Prompts operation for cleaner interface
- 🚀 **AI Agent Compatible** - Can now be used as a tool by AI agents in MCP server environments
- 📚 **Comprehensive Documentation** - Added detailed MCP integration guide and usage examples

### v1.2.0 - Full Text Search Enhancement
- 🔍 **Advanced Search** - Added full text search functionality with searchQuery and searchType parameters
- 🎯 **Search Modes** - Support for "Names & Tags", "Full Text", and "Both" search types
- 📊 **Enhanced Filtering** - Improved prompt discovery and content-based searching
- ✅ **API Compliant** - Uses official Langfuse API v2 search parameters

### v1.1.1 - API Compatibility Fix
- 🔧 **Removed Unsupported Operations** - Removed Update and Delete operations (not supported by Langfuse public API v2)
- ✅ **API Compliance** - Now only includes operations officially supported by Langfuse public API
- 📝 **Clear Documentation** - Added explanation about API limitations and workarounds
- 🎯 **Reliable Operations** - Focus on Create, Get, and List operations that work correctly6B6B.svg)](https://docs.n8n.io/integrations/community-nodes/)

</div>

## � Table of Contents

- [✨ Features](#-features)
- [� Installation](#-installation)
- [🤖 MCP Server Integration](#-mcp-server-integration)
- [🔐 Credentials](#-credentials)
- [🎯 Operations](#-operations)
- [📝 Usage Examples](#-usage-examples)
- [🐳 Docker Setup](#-docker-setup)
- [🛠️ Development](#-development)
- [🤝 Contributing](#-contributing)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 Resources](#-resources)

## ✨ Features

### 🎯 Comprehensive Prompt Management
- **🔍 Get Prompt**: Retrieve specific prompts by name, version, or label
- **📋 List Prompts**: Browse all prompts with advanced filtering and pagination
- **➕ Create Prompt**: Create new text or chat prompts directly from n8n workflows

### 🚀 Advanced Capabilities
- ✅ **Smart Filtering** - Filter by name, tags, and labels
- ✅ **Pagination Support** - Handle large prompt collections efficiently
- ✅ **Multiple Types** - Support for both text and chat prompts
- ✅ **Create & Read Operations** - Get, List, and Create prompts with full API support
- ✅ **Version Control** - Retrieve specific prompt versions and create new versions
- ✅ **Bulk Operations** - Process multiple prompts efficiently
- ✅ **Full Text Search** - Search prompts by content using "Names & Tags", "Full Text", or "Both" modes
- ✅ **MCP Server Integration** - Compatible as a tool in n8n's MCP (Model Context Protocol) server workflows

## 📦 Installation

### Community Nodes (Recommended)

For **n8n v0.187+**, install directly from the UI:

1. Go to **Settings → Community Nodes**
2. Click **Install**
3. Enter `n8n-nodes-langfuse-prompt` in the package name field
4. Agree to the risks and click **Install**

### Manual Installation

```bash
# Navigate to your n8n installation directory
cd ~/.n8n

# Install the package
npm install n8n-nodes-langfuse-prompt

# Restart n8n
n8n start
```

### Docker Installation

Use the provided Docker configuration for production deployments:

```bash
# Clone the repository
git clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git
cd n8n-nodes-langfuse-prompt

# Build and run with Docker
docker build -t n8n-langfuse-prompt .
docker run -it -p 5678:5678 n8n-langfuse-prompt
```

## 🤖 MCP Server Integration

This node is compatible with n8n's **Model Context Protocol (MCP) server** integration, making it usable as a tool in AI workflows.

### What is MCP Integration?

The MCP integration allows AI agents to use this Langfuse Prompts node as a tool during their reasoning process. When connected through MCP:

- 🤖 **AI Agent Tool**: AI agents can automatically call Langfuse operations based on context
- 🔄 **Dynamic Prompt Management**: AI can retrieve, search, and create prompts on-demand
- 🎯 **Context-Aware Selection**: Intelligent prompt selection based on conversation context
- 🚀 **Automated Workflows**: Seamless integration between AI reasoning and prompt management

### Using with MCP Client Tool

1. **Setup MCP Connection**: Use n8n's "MCP Client Tool" node to connect to an MCP server
2. **Enable Tool Usage**: The Langfuse Prompts node will appear as an available tool
3. **AI Integration**: AI agents can now call Langfuse operations automatically

**Example MCP Workflow:**
```
AI Agent → MCP Client Tool → Langfuse Prompts → Response
```

**Common Use Cases:**
- **Dynamic RAG**: AI retrieves relevant prompts based on user queries
- **Contextual Responses**: AI selects appropriate prompts for different scenarios
- **Prompt Discovery**: AI searches for prompts containing specific terms or concepts
- **Automated Prompt Creation**: AI creates new prompts based on conversation patterns

### MCP Server Trigger

You can also expose this node through n8n's "MCP Server Trigger" to make Langfuse operations available to external MCP clients:

1. Add "MCP Server Trigger" to your workflow
2. Connect the Langfuse Prompts node
3. Configure authentication and transport settings
4. External AI systems can now call your Langfuse operations

## 🔐 Credentials

### Setting up Langfuse API Credentials

1. **Get your API keys from Langfuse:**
   - Sign up at [Langfuse Cloud](https://cloud.langfuse.com) or use your self-hosted instance
   - Create a project in your dashboard
   - Go to **Settings → API Keys**
   - Create a new API key pair (Public + Secret)

2. **Configure in n8n:**
   - Go to **Credentials → Add Credential**
   - Search for **"Langfuse API"**
   - Fill in the required fields:

| Field | Description | Example |
|-------|-------------|---------|
| **Langfuse Host URL** | Your Langfuse instance URL | `https://cloud.langfuse.com` |
| **Public Key** | Your Langfuse public key | `pk-xxx...` |
| **Secret Key** | Your Langfuse secret key | `sk-xxx...` |

## 🎯 Operations

### 🔍 Get Prompt

Retrieve a specific prompt by name with optional version or label filtering.

**Parameters:**
- `Prompt Name` *(required)*: Name of the prompt to retrieve
- `Version` *(optional)*: Specific version number
- `Label` *(optional)*: Label filter (defaults to "production")

**Example Response:**
```json
{
  "id": "prompt-123",
  "name": "welcome-prompt",
  "version": 2,
  "type": "text",
  "prompt": "Welcome {{userName}}! How can I help you today?",
  "config": {"temperature": 0.7},
  "labels": ["production", "latest"],
  "tags": ["onboarding", "welcome"]
}
```

### 📋 List Prompts

Browse and search through all available prompts with pagination and **full text search** support.

**Parameters:**
- `Page` *(optional)*: Page number for pagination (default: 1)
- `Limit` *(optional)*: Results per page (max: 100, default: 50)
- `Name Filter` *(optional)*: Filter prompts by name
- `Tag Filter` *(optional)*: Filter prompts by tag
- `Label Filter` *(optional)*: Filter prompts by label
- `Search Query` *(optional)*: **Full text search** across prompt names, tags, and content
- `Search Type` *(optional)*: Choose search scope:
  - **Names & Tags**: Search in prompt names and tags only (faster)
  - **Full Text**: Search in all fields including prompt content (comprehensive)
  - **Both**: Search in both metadata and content

**🔍 Full Text Search Examples:**
- Search for "customer support" across all prompt content
- Find prompts containing "temperature" in their configuration
- Look for prompts tagged with "chatbot" or containing "chat" in content
- Search for specific prompt names like "welcome-*"

**Example Response:**
```json
{
  "data": [
    {
      "name": "chatbot-prompt",
      "versions": [1, 2, 3],
      "lastUpdatedAt": "2024-01-15T10:30:00.000Z",
      "tags": ["chatbot", "support"],
      "description": "Customer support chatbot prompt"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 50,
    "totalPages": 3,
    "totalItems": 125
  }
}
```

### ➕ Create Prompt

Create new text or chat prompts directly from your n8n workflow.

**Parameters:**
- `Prompt Name` *(required)*: Name for the new prompt
- `Prompt Type` *(required)*: Either "text" or "chat"
- `Prompt Content` *(for text)*: The text content
- `Chat Messages` *(for chat)*: JSON array of message objects
- `Labels` *(optional)*: Comma-separated labels (default: "production")
- `Tags` *(optional)*: Comma-separated tags
- `Config` *(optional)*: JSON configuration object

**Chat Messages Format:**
```json
[
  {
    "role": "system",
    "content": "You are a helpful assistant"
  },
  {
    "role": "user",
    "content": "{{question}}"
  }
]
```

### API Operations Supported

This node implements all operations officially supported by the Langfuse public API v2:

- ✅ `GET /api/public/v2/prompts` - List prompts with filtering and search
- ✅ `POST /api/public/v2/prompts` - Create new prompts  
- ✅ `GET /api/public/v2/prompts/[name]` - Get specific prompt by name

**Note**: Update and Delete operations are not available via the Langfuse public API. For prompt modifications, create new versions using the Create operation. For deletions, use the Langfuse web interface.

## 📝 Usage Examples

### Example 1: Dynamic Prompt Selection

Create a workflow that selects prompts based on user context:

```json
{
  "resource": "prompt",
  "operation": "list",
  "nameFilter": "customer-support",
  "tagFilter": "{{$json.category}}"
}
```

### Example 2: Full Text Search

Search for prompts containing specific terms across all fields:

```json
{
  "resource": "prompt",
  "operation": "list",
  "searchQuery": "customer support agent",
  "searchType": "content",
  "page": 1,
  "limit": 10
}
```

**Search Examples:**
- `"temperature"` - Find all prompts mentioning temperature in content or config
- `"chatbot"` - Find prompts tagged or containing chatbot references
- `"welcome {{user}}"` - Search for specific prompt patterns
- `"You are a helpful assistant"` - Find system messages in chat prompts

### Example 3: Create a New Prompt Version

Create new prompt versions for testing:

```json
{
  "resource": "prompt",
  "operation": "create",
  "createPromptName": "welcome-prompt",
  "promptType": "text",
  "promptContent": "Hello {{userName}}! Welcome to our improved service!",
  "labels": "testing,latest",
  "tags": "welcome,improved"
}
```

## 🐳 Docker Setup

### Quick Start with Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_CUSTOM_EXTENSIONS=/opt/n8n-custom-nodes
    volumes:
      - n8n_data:/home/node/.n8n
    command: >
      bash -c "
        npm install n8n-nodes-langfuse-prompt &&
        n8n start
      "
volumes:
  n8n_data:
```

Run with:
```bash
docker-compose up -d
```

## 🛠️ Development

### Setting up the Development Environment

```bash
# Clone the repository
git clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git
cd n8n-nodes-langfuse-prompt

# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

### Project Structure

```
n8n-nodes-langfuse-prompt/
├── credentials/
│   └── LangfuseApi.credentials.ts
├── nodes/
│   └── Langfuse/
│       ├── Langfuse.node.ts
│       ├── Langfuse.json
│       └── langfuse.svg
├── assets/
│   └── *.png
├── docker/
│   └── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

### Building and Testing

```bash
# Development mode with watch
npm run dev

# Production build
npm run build

# Run tests (if available)
npm test
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use the provided ESLint configuration
- Format code with Prettier
- Write clear commit messages
- Update documentation for new features

## 🐛 Troubleshooting

### Common Issues

#### "Prompt not found"
- ✅ Verify prompt name spelling
- ✅ Check if prompt exists in correct project
- ✅ Ensure proper label/version specified

#### "Authentication failed"
- ✅ Verify API keys are correct
- ✅ Check Langfuse host URL format
- ✅ Ensure keys have proper permissions

#### "Rate limit exceeded"
- ✅ Reduce request frequency
- ✅ Implement retry logic with backoff
- ✅ Contact Langfuse for rate limit increases

### Debug Mode

Enable debug logging in n8n:
```bash
N8N_LOG_LEVEL=debug n8n start
```

## 📚 Resources

- **📖 [n8n Documentation](https://docs.n8n.io/)**
- **🔗 [Langfuse Documentation](https://docs.langfuse.com/)**
- **💬 [n8n Community Forum](https://community.n8n.io/)**
- **🐙 [GitHub Repository](https://github.com/rlquilez/n8n-nodes-langfuse-prompt)**
- **📦 [NPM Package](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

This project is based on the original [n8n-nodes-langfuse](https://github.com/langfuse/n8n-nodes-langfuse) by the Langfuse team. We extend our sincere gratitude to the original authors for creating the foundation that made this enhanced version possible.

## 📈 Version History

### v1.1.1 - API Compatibility Fix
- 🔧 **Removed Unsupported Operations** - Removed Update and Delete operations (not supported by Langfuse public API v2)
- ✅ **API Compliance** - Now only includes operations officially supported by Langfuse public API
- � **Clear Documentation** - Added explanation about API limitations and workarounds
- 🎯 **Reliable Operations** - Focus on Create, Get, and List operations that work correctly

### v1.1.0 - Enhanced Operations (Deprecated)
- ❌ Included operations not supported by Langfuse public API
- ✨ Attempted Delete and Update operations (resulted in 405 errors)

### v1.0.1 - Naming Fix
- 🔧 Fixed naming conflicts by renaming nodes and credentials to more specific names
- 🚀 Resolved "entry with this name already exists" installation error

### v1.0.0 - Initial Release
- ✨ Complete rebranding to `n8n-nodes-langfuse-prompt`
- 📝 Enhanced documentation with visual improvements
- 🔧 Updated package configuration and metadata
- 🚀 Ready for npm publication

---

<div align="center">

**Built with ❤️ for the n8n and Langfuse communities**

[⭐ Star this repo](https://github.com/rlquilez/n8n-nodes-langfuse-prompt) | [🐛 Report Bug](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues) | [✨ Request Feature](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues)

</div>
