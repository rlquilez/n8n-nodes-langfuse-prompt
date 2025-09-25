# n8n-nodes-langfuse-prompt# 🚀 n8n-nodes-langfuse-prompt# 🚀 n8n-nod## 📋 Table of Con- [📦 Installation](#-installation)entss-langfuse-prompt



Enhanced Langfuse integration for n8n with advanced Prompt Management capabilities.



[![npm version](https://badge.fury.io/js/n8n-nodes-langfuse-prompt.svg)](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)<div align="center"><div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20Node-FF6B6B.svg)](https://docs.n8n.io/integrations/community-nodes/)



## Table of Contents**Enhanced Langfuse integration for n8n with advanced Prompt Management features****Enhanced Langfuse integration for n8n with advanced Prompt Management features**



- [Features](#features)

- [Installation](#installation)

- [MCP Server Integration](#mcp-server-integration)[![npm version](https://badge.fury.io/js/n8n-nodes-langfuse-prompt.svg)](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)[![npm version](https://badge.fury.io/js/n8n-nodes-langfuse-prompt.svg)](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)

- [Credentials Setup](#credentials-setup)

- [Operations](#operations)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [Usage Examples](#usage-examples)

- [Docker Setup](#docker-setup)[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20Node-FF6B6B.svg)](https://docs.n8n.io/integrations/community-nodes/)

- [Development](#development)

- [Troubleshooting](#troubleshooting)

- [License](#license)

</div>

## Features

- [✨ Features](#-features)

### Comprehensive Prompt Management

- **Get Prompt**: Retrieve specific prompts by name, version, or label## 📋 Table of Contents- [� Installation](#-installation)

- **List Prompts**: Browse and search all prompts with advanced filtering

- **Create Prompt**: Create new text or chat prompts directly from n8n workflows- [🤖 MCP Server Integration](#-mcp-server-integration)



### Advanced Search Capabilities- [✨ Features](#-features)- [🔐 Credentials](#-credentials)

- **Full Text Search**: Search through prompt content, names, and tags

- **Smart Filtering**: Filter by name, tags, labels, and creation dates- [📦 Installation](#-installation)- [🎯 Operations](#-operations)

- **Search Modes**: Choose between "Names & Tags", "Full Text", or "Both"

- **Pagination Support**: Handle large prompt collections efficiently- [🤖 MCP Server Integration](#-mcp-server-integration)- [📝 Usage Examples](#-usage-examples)



### Modern Integration Features- [🔐 Credentials](#-credentials)- [🐳 Docker Setup](#-docker-setup)

- **MCP Server Compatible**: Works as a tool in Model Context Protocol workflows

- **Version Control**: Retrieve specific prompt versions and create new versions- [🎯 Operations](#-operations)- [🛠️ Development](#-development)

- **Bulk Operations**: Process multiple prompts efficiently

- **Type Support**: Handle both text and chat-style prompts- [📝 Usage Examples](#-usage-examples)- [🤝 Contributing](#-contributing)



![n8n Langfuse Prompt Node](assets/new_n8n_langfuse_node.png)- [🐳 Docker Setup](#-docker-setup)- [🐛 Troubleshooting](#-troubleshooting)



## Installation- [🛠️ Development](#-development)- [📚 Resources](#-resources)



### Method 1: Community Nodes (Recommended)- [🤝 Contributing](#-contributing)



For n8n v0.187+, install directly from the UI:- [🐛 Troubleshooting](#-troubleshooting)## ✨ Features



1. Go to **Settings → Community Nodes**- [📚 Resources](#-resources)

2. Click **Install**

3. Enter `n8n-nodes-langfuse-prompt`### 🎯 Comprehensive Prompt Management

4. Click **Install**

## ✨ Features- **🔍 Get Prompt**: Retrieve specific prompts by name, version, or label

### Method 2: Manual Installation

- **📋 List Prompts**: Browse all prompts with advanced filtering and pagination

```bash

# Navigate to your n8n installation directory### 🎯 Comprehensive Prompt Management- **➕ Create Prompt**: Create new text or chat prompts directly from n8n workflows

cd ~/.n8n

- **🔍 Get Prompt**: Retrieve specific prompts by name, version, or label

# Install the package

npm install n8n-nodes-langfuse-prompt- **📋 List Prompts**: Browse all prompts with advanced filtering and pagination### 🚀 Advanced Capabilities



# Restart n8n- **➕ Create Prompt**: Create new text or chat prompts directly from n8n workflows- ✅ **Smart Filtering** - Filter by name, tags, and labels

```

- ✅ **Pagination Support** - Handle large prompt collections efficiently

### Method 3: Docker

### 🚀 Advanced Capabilities- ✅ **Multiple Types** - Support for both text and chat prompts

Add to your `docker-compose.yml`:

- ✅ **Smart Filtering** - Filter by name, tags, and labels- ✅ **Create & Read Operations** - Get, List, and Create prompts with full API support

```yaml

environment:- ✅ **Pagination Support** - Handle large prompt collections efficiently- ✅ **Version Control** - Retrieve specific prompt versions and create new versions

  N8N_NODES_INCLUDE: "n8n-nodes-langfuse-prompt"

```- ✅ **Multiple Types** - Support for both text and chat prompts- ✅ **Bulk Operations** - Process multiple prompts efficiently



## MCP Server Integration- ✅ **Create & Read Operations** - Get, List, and Create prompts with full API support- ✅ **Full Text Search** - Search prompts by content using "Names & Tags", "Full Text", or "Both" modes



This node supports **Model Context Protocol (MCP)**, enabling AI agents to interact directly with Langfuse prompts in n8n workflows.- ✅ **Version Control** - Retrieve specific prompt versions and create new versions- ✅ **MCP Server Integration** - Compatible as a tool in n8n's MCP (Model Context Protocol) server workflows



![MCP Server Integration](assets/langfuse_mcp_server.png)- ✅ **Bulk Operations** - Process multiple prompts efficiently



### MCP Features- ✅ **Full Text Search** - Search prompts by content using "Names & Tags", "Full Text", or "Both" modes![n8n Langfuse Prompt Node](assets/new_n8n_langfuse_node.png)

- **Tool Integration**: AI agents can use this node as a tool

- **Dynamic Access**: Agents can retrieve, search, and create prompts- ✅ **MCP Server Integration** - Compatible as a tool in n8n's MCP (Model Context Protocol) server workflows

- **Workflow Automation**: Seamless integration with n8n's MCP Server Trigger

## 📦 Installation

### MCP Usage Example

![n8n Langfuse Prompt Node](assets/new_n8n_langfuse_node.png)

```javascript

// AI agent can call:### Community Nodes (Recommended)

{

  "operation": "get",## 📦 Installation

  "promptName": "customer-support-prompt",

  "label": "production"For **n8n v0.187+**, install directly from the UI:

}

### Community Nodes (Recommended)

// Or search for prompts:

{1. Go to **Settings → Community Nodes**

  "operation": "list",

  "searchQuery": "customer satisfaction",For **n8n v0.187+**, install directly from the UI:2. Click **Install**

  "searchType": "Full Text"

}3. Enter `n8n-nodes-langfuse-prompt` in the package name field

```

1. Go to **Settings → Community Nodes**4. Agree to the risks and click **Install**

## Credentials Setup

2. Click **Install**

Create a **Langfuse API** credential with:

3. Enter `n8n-nodes-langfuse-prompt` in the package name field### Manual Installation

- **Base URL**: Your Langfuse instance (e.g., `https://cloud.langfuse.com`)

- **Public Key**: Your Langfuse public key  4. Agree to the risks and click **Install**

- **Secret Key**: Your Langfuse secret key

```bash

Find your API keys in Langfuse project settings.

### Manual Installation# Navigate to your n8n installation directory

## Operations

cd ~/.n8n

### Get Prompt

```bash

Retrieve a specific prompt by name.

# Navigate to your n8n installation directory# Install the package

**Required Parameters:**

- `promptName`: The prompt namecd ~/.n8nnpm install n8n-nodes-langfuse-prompt



**Optional Parameters:**

- `label`: Version label (e.g., "production")

- `version`: Specific version number# Install the package# Restart n8n



### List Promptsnpm install n8n-nodes-langfuse-promptn8n start



Search and browse your prompts with advanced filtering.```



**Optional Parameters:**# Restart n8n

- `nameFilter`: Filter by prompt name

- `tagFilter`: Filter by tag```### Docker Installation

- `labelFilter`: Filter by label  

- `searchQuery`: Full text search term

- `searchType`: Search mode ("Names & Tags", "Full Text", or "Both")

- `page`: Page number for pagination### Docker InstallationUse the provided Docker configuration for production deployments:

- `limit`: Items per page



### Create Prompt

Add to your `docker-compose.yml`:```bash

Create new text or chat prompts.

# Clone the repository

**Required Parameters:**

- `createPromptName`: Unique prompt name```yamlgit clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git

- `promptType`: "text" or "chat"

- `promptContent`: Content for text promptsenvironment:cd n8n-nodes-langfuse-prompt

- `chatMessages`: JSON array for chat prompts

  N8N_NODES_INCLUDE: "n8n-nodes-langfuse-prompt"

**Optional Parameters:**

- `labels`: Comma-separated labels```# Build and run with Docker

- `tags`: Comma-separated tags

- `config`: JSON configuration objectdocker build -t n8n-langfuse-prompt .

- `commitMessage`: Version commit message

## 🤖 MCP Server Integrationdocker run -it -p 5678:5678 n8n-langfuse-prompt

## Usage Examples

```

### Example 1: Get a Production Prompt

This node is **MCP (Model Context Protocol) compatible**, meaning it can be used as a tool by AI agents in n8n's MCP server workflows.

```json

{## 🤖 MCP Server Integration

  "operation": "get",

  "promptName": "customer-service-template",### Key MCP Features

  "label": "production"

}- **Tool Integration**: Set `usableAsTool: true` in node propertiesThis node is compatible with n8n's **Model Context Protocol (MCP) server** integration, making it usable as a tool in AI workflows.

```

- **AI Agent Access**: Compatible with n8n's MCP Client Tool and MCP Server Trigger

### Example 2: Search Prompts by Content

- **Seamless Workflows**: AI agents can directly interact with Langfuse prompts### What is MCP Integration?

```json

{

  "operation": "list", 

  "searchQuery": "email response",![MCP Server Integration](assets/langfuse_mcp_server.png)The MCP integration allows AI agents to use this Langfuse Prompts node as a tool during their reasoning process. When connected through MCP:

  "searchType": "Full Text",

  "limit": 10

}

```### MCP Usage Example- 🤖 **AI Agent Tool**: AI agents can automatically call Langfuse operations based on context



### Example 3: Create a Chat Prompt- 🔄 **Dynamic Prompt Management**: AI can retrieve, search, and create prompts on-demand



```json1. **Setup MCP Server Trigger**: Configure your n8n workflow with MCP Server Trigger- 🎯 **Context-Aware Selection**: Intelligent prompt selection based on conversation context

{

  "operation": "create",2. **Add Langfuse Node**: Include the Langfuse Prompt node with `usableAsTool: true`- 🚀 **Automated Workflows**: Seamless integration between AI reasoning and prompt management

  "createPromptName": "support-agent-v2",

  "promptType": "chat",3. **AI Agent Interaction**: AI agents can now:

  "chatMessages": [

    {   - Retrieve specific prompts for dynamic use![Langfuse MCP Server Integration](assets/langfuse_mcp_server.png)

      "role": "system", 

      "content": "You are a helpful customer support agent..."   - List available prompts for selection

    },

    {   - Create new prompts based on conversation context### Using with MCP Client Tool

      "role": "user",

      "content": "{{customer_question}}"

    }

  ],```javascript1. **Setup MCP Connection**: Use n8n's "MCP Client Tool" node to connect to an MCP server

  "labels": "production,support",

  "tags": "customer-service,chat"// Example MCP tool call from AI agent2. **Enable Tool Usage**: The Langfuse Prompts node will appear as an available tool

}

```{3. **AI Integration**: AI agents can now call Langfuse operations automatically



### Example 4: Filter by Tags and Date  "operation": "get",



```json  "name": "system-prompt-v2",**Example MCP Workflow:**

{

  "operation": "list",  "version": 1,```

  "tagFilter": "production",

  "limit": 20,  "label": "production"AI Agent → MCP Client Tool → Langfuse Prompts → Response

  "page": 1

}}```

```

```

## Docker Setup

**Common Use Cases:**

### Option 1: Environment Variable

This enables powerful workflows where AI agents can dynamically manage and utilize Langfuse prompts within your n8n automations.- **Dynamic RAG**: AI retrieves relevant prompts based on user queries

```dockerfile

FROM n8nio/n8n:latest- **Contextual Responses**: AI selects appropriate prompts for different scenarios

ENV N8N_NODES_INCLUDE=n8n-nodes-langfuse-prompt

```## 🔐 Credentials- **Prompt Discovery**: AI searches for prompts containing specific terms or concepts



### Option 2: Docker Compose- **Automated Prompt Creation**: AI creates new prompts based on conversation patterns



```yamlCreate a new **Langfuse API** credential with:

version: '3.8'

services:### MCP Server Trigger

  n8n:

    image: n8nio/n8n:latest- **Base URL**: Your Langfuse instance URL (e.g., `https://cloud.langfuse.com`)

    environment:

      - N8N_NODES_INCLUDE=n8n-nodes-langfuse-prompt- **Public Key**: Your Langfuse public keyYou can also expose this node through n8n's "MCP Server Trigger" to make Langfuse operations available to external MCP clients:

    ports:

      - "5678:5678"- **Secret Key**: Your Langfuse secret key

    volumes:

      - n8n_data:/home/node/.n8n1. Add "MCP Server Trigger" to your workflow

volumes:

  n8n_data:You can find your API keys in your Langfuse project settings.2. Connect the Langfuse Prompts node

```

3. Configure authentication and transport settings

### Option 3: Custom Build

## 🎯 Operations4. External AI systems can now call your Langfuse operations

```dockerfile

FROM n8nio/n8n:latest

USER root

RUN npm install -g n8n-nodes-langfuse-prompt### 🔍 Get Prompt## 🔐 Credentials

USER node

ENV N8N_NODES_INCLUDE=n8n-nodes-langfuse-promptRetrieve a specific prompt by name with optional version and label filtering.

```

### Setting up Langfuse API Credentials

## Development

**Parameters:**

### Prerequisites

- Node.js 16+- `name` (required): The prompt name1. **Get your API keys from Langfuse:**

- n8n CLI: `npm install -g n8n`

- `version` (optional): Specific version number   - Sign up at [Langfuse Cloud](https://cloud.langfuse.com) or use your self-hosted instance

### Setup

```bash- `label` (optional): Version label (e.g., "production", "latest")   - Create a project in your dashboard

git clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git

cd n8n-nodes-langfuse-prompt   - Go to **Settings → API Keys**

npm install

npm run build### 📋 List Prompts   - Create a new API key pair (Public + Secret)

npm link

```Browse and search through your prompts with advanced filtering options.



### Testing2. **Configure in n8n:**

```bash

# In your n8n directory**Parameters:**   - Go to **Credentials → Add Credential**

npm link n8n-nodes-langfuse-prompt

n8n start- `name` (optional): Filter by prompt name   - Search for **"Langfuse API"**

```

- `labels` (optional): Filter by labels   - Fill in the required fields:

## Troubleshooting

- `tags` (optional): Filter by tags

### Common Issues

- `fromCreatedAt` (optional): Filter by creation date (from)| Field | Description | Example |

**Node not appearing?**

- Restart n8n completely- `toCreatedAt` (optional): Filter by creation date (to)|-------|-------------|---------|

- Check n8n version compatibility

- Verify package installation- `version` (optional): Filter by version| **Langfuse Host URL** | Your Langfuse instance URL | `https://cloud.langfuse.com` |



**Search not working?**- `page` (optional): Page number for pagination| **Public Key** | Your Langfuse public key | `pk-xxx...` |

- Ensure `searchQuery` is provided

- Check `searchType` parameter- `limit` (optional): Items per page (max 50)| **Secret Key** | Your Langfuse secret key | `sk-xxx...` |

- Verify Langfuse instance version



**API connection issues?**

- Verify Langfuse credentials**🔍 Full Text Search Options:**## 🎯 Operations

- Check instance URL accessibility

- Ensure API keys have proper permissions- `searchQuery` (optional): Search term for content-based filtering



### Getting Help- `searchType` (optional): Choose search mode:### 🔍 Get Prompt

- Check [Issues](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues)

- Review [Langfuse API docs](https://langfuse.com/docs/api)  - **"Names & Tags"** (default): Search in prompt names and tags only

- Join [n8n Community](https://community.n8n.io/)

  - **"Full Text"**: Search in prompt content/templates  Retrieve a specific prompt by name with optional version or label filtering.

## License

  - **"Both"**: Search in names, tags, AND content

MIT License - see [LICENSE.md](LICENSE.md) for details.

**Parameters:**

## Acknowledgments

### ➕ Create Prompt- `Prompt Name` *(required)*: Name of the prompt to retrieve

Based on the original [n8n-nodes-langfuse](https://github.com/langfuse/n8n-nodes-langfuse) by the Langfuse team.

Create new text or chat prompts with full configuration options.- `Version` *(optional)*: Specific version number

---

- `Label` *(optional)*: Label filter (defaults to "production")

**Built for the n8n and Langfuse communities**

**Parameters:**

[⭐ Star this repo](https://github.com/rlquilez/n8n-nodes-langfuse-prompt) | [🐛 Report Issue](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues) | [✨ Request Feature](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues)
- `name` (required): Unique prompt name**Example Response:**

- `prompt` (required): The prompt content/template```json

- `isActive` (optional): Mark prompt as active{

- `config` (optional): Additional prompt configuration  "id": "prompt-123",

- `labels` (optional): Assign labels for organization  "name": "welcome-prompt",

- `tags` (optional): Add tags for categorization  "version": 2,

  "type": "text",

**Prompt Types:**  "prompt": "Welcome {{userName}}! How can I help you today?",

- **Text Prompt**: Simple string template  "config": {"temperature": 0.7},

- **Chat Prompt**: Structured conversation format with roles  "labels": ["production", "latest"],

  "tags": ["onboarding", "welcome"]

## 📝 Usage Examples}

```

### Example 1: Get Production Prompt

```json### 📋 List Prompts

{

  "operation": "get",Browse and search through all available prompts with pagination and **full text search** support.

  "name": "customer-service-prompt",

  "label": "production"**Parameters:**

}- `Page` *(optional)*: Page number for pagination (default: 1)

```- `Limit` *(optional)*: Results per page (max: 100, default: 50)

- `Name Filter` *(optional)*: Filter prompts by name

### Example 2: Search Prompts by Content- `Tag Filter` *(optional)*: Filter prompts by tag

```json- `Label Filter` *(optional)*: Filter prompts by label

{- `Search Query` *(optional)*: **Full text search** across prompt names, tags, and content

  "operation": "list",- `Search Type` *(optional)*: Choose search scope:

  "searchQuery": "customer satisfaction",  - **Names & Tags**: Search in prompt names and tags only (faster)

  "searchType": "Full Text",  - **Full Text**: Search in all fields including prompt content (comprehensive)

  "limit": 10  - **Both**: Search in both metadata and content

}

```**🔍 Full Text Search Examples:**

- Search for "customer support" across all prompt content

### Example 3: Create New Chat Prompt- Find prompts containing "temperature" in their configuration

```json- Look for prompts tagged with "chatbot" or containing "chat" in content

{- Search for specific prompt names like "welcome-*"

  "operation": "create",

  "name": "support-agent-v3",**Example Response:**

  "prompt": [```json

    {{

      "role": "system",  "data": [

      "content": "You are a helpful customer support agent..."    {

    },      "name": "chatbot-prompt",

    {      "versions": [1, 2, 3],

      "role": "user",       "lastUpdatedAt": "2024-01-15T10:30:00.000Z",

      "content": "{{user_question}}"      "tags": ["chatbot", "support"],

    }      "description": "Customer support chatbot prompt"

  ],    }

  "labels": ["support", "v3"],  ],

  "tags": ["customer-service", "chat"],  "meta": {

  "isActive": true    "page": 1,

}    "limit": 50,

```    "totalPages": 3,

    "totalItems": 125

### Example 4: List Recent Prompts with Pagination  }

```json}

{```

  "operation": "list",

  "tags": ["production"],### ➕ Create Prompt

  "limit": 20,

  "page": 1,Create new text or chat prompts directly from your n8n workflow.

  "fromCreatedAt": "2024-01-01T00:00:00Z"

}**Parameters:**

```- `Prompt Name` *(required)*: Name for the new prompt

- `Prompt Type` *(required)*: Either "text" or "chat"

## 🐳 Docker Setup- `Prompt Content` *(for text)*: The text content

- `Chat Messages` *(for chat)*: JSON array of message objects

### Method 1: Environment Variable- `Labels` *(optional)*: Comma-separated labels (default: "production")

- `Tags` *(optional)*: Comma-separated tags

```dockerfile- `Config` *(optional)*: JSON configuration object

FROM n8nio/n8n:latest

ENV N8N_NODES_INCLUDE=n8n-nodes-langfuse-prompt**Chat Messages Format:**

``````json

[

### Method 2: Docker Compose  {

    "role": "system",

```yaml    "content": "You are a helpful assistant"

version: '3.8'  },

services:  {

  n8n:    "role": "user",

    image: n8nio/n8n:latest    "content": "{{question}}"

    environment:  }

      - N8N_NODES_INCLUDE=n8n-nodes-langfuse-prompt]

    volumes:```

      - n8n_data:/home/node/.n8n

    ports:### API Operations Supported

      - "5678:5678"

```This node implements all operations officially supported by the Langfuse public API v2:



### Method 3: Custom Dockerfile- ✅ `GET /api/public/v2/prompts` - List prompts with filtering and search

- ✅ `POST /api/public/v2/prompts` - Create new prompts  

```dockerfile- ✅ `GET /api/public/v2/prompts/[name]` - Get specific prompt by name

FROM n8nio/n8n:latest

**Note**: Update and Delete operations are not available via the Langfuse public API. For prompt modifications, create new versions using the Create operation. For deletions, use the Langfuse web interface.

USER root

RUN npm install -g n8n-nodes-langfuse-prompt## 📝 Usage Examples

USER node

### Example 1: Dynamic Prompt Selection

ENV N8N_NODES_INCLUDE=n8n-nodes-langfuse-prompt

```Create a workflow that selects prompts based on user context:



## 🛠️ Development```json

{

### Prerequisites  "resource": "prompt",

- Node.js 16+  "operation": "list",

- n8n CLI installed globally: `npm install -g n8n`  "nameFilter": "customer-support",

  "tagFilter": "{{$json.category}}"

### Setup}

```bash```

# Clone the repository

git clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git### Example 2: Full Text Search

cd n8n-nodes-langfuse-prompt

Search for prompts containing specific terms across all fields:

# Install dependencies

npm install```json

{

# Build the project  "resource": "prompt",

npm run build  "operation": "list",

  "searchQuery": "customer support agent",

# Link for local development  "searchType": "content",

npm link  "page": 1,

```  "limit": 10

}

### Building```

```bash

npm run build**Search Examples:**

```- `"temperature"` - Find all prompts mentioning temperature in content or config

- `"chatbot"` - Find prompts tagged or containing chatbot references

### Testing Locally- `"welcome {{user}}"` - Search for specific prompt patterns

```bash- `"You are a helpful assistant"` - Find system messages in chat prompts

# Link the package

npm link### Example 3: Create a New Prompt Version



# In your n8n directory, link the nodeCreate new prompt versions for testing:

npm link n8n-nodes-langfuse-prompt

```json

# Start n8n{

n8n start  "resource": "prompt",

```  "operation": "create",

  "createPromptName": "welcome-prompt",

## 🤝 Contributing  "promptType": "text",

  "promptContent": "Hello {{userName}}! Welcome to our improved service!",

We welcome contributions! Here's how you can help:  "labels": "testing,latest",

  "tags": "welcome,improved"

### 🐛 Bug Reports}

- Use the issue tracker to report bugs```

- Include detailed steps to reproduce

- Provide error messages and logs## 🐳 Docker Setup



### ✨ Feature Requests### Quick Start with Docker Compose

- Suggest new features via issues

- Explain the use case and benefitsCreate a `docker-compose.yml` file:

- Consider if it fits the project scope

```yaml

### 🔧 Pull Requestsversion: '3.8'

1. Fork the repositoryservices:

2. Create a feature branch: `git checkout -b feature/my-feature`  n8n:

3. Make your changes and test thoroughly    image: docker.n8n.io/n8nio/n8n

4. Update documentation if needed    ports:

5. Submit a pull request with clear description      - "5678:5678"

    environment:

### 📋 Development Guidelines      - N8N_CUSTOM_EXTENSIONS=/opt/n8n-custom-nodes

- Follow existing code style and patterns    volumes:

- Add appropriate error handling      - n8n_data:/home/node/.n8n

- Update TypeScript definitions    command: >

- Test with different n8n versions      bash -c "

- Document any breaking changes        npm install n8n-nodes-langfuse-prompt &&

        n8n start

## 🐛 Troubleshooting      "

volumes:

### Common Issues  n8n_data:

```

#### Installation Problems

```bashRun with:

# Clear npm cache```bash

npm cache clean --forcedocker-compose up -d

```

# Reinstall

npm uninstall n8n-nodes-langfuse-prompt## 🛠️ Development

npm install n8n-nodes-langfuse-prompt

```### Setting up the Development Environment



#### Node Not Appearing```bash

- Restart n8n completely# Clone the repository

- Check if the package is in `node_modules`git clone https://github.com/rlquilez/n8n-nodes-langfuse-prompt.git

- Verify n8n version compatibilitycd n8n-nodes-langfuse-prompt



#### API Connection Issues# Install dependencies

- Verify your Langfuse credentialsnpm install

- Check if your Langfuse instance is accessible

- Ensure API keys have proper permissions# Build the project

npm run build

#### Search Not Working

- Verify `searchQuery` parameter is provided# Run linting

- Check that `searchType` is one of: "Names & Tags", "Full Text", or "Both"npm run lint

- Some search functionality requires newer Langfuse versions

# Format code

### Getting Helpnpm run format

- Check the [Issues](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues) page```

- Review the [Langfuse API documentation](https://langfuse.com/docs/api)

- Join the [n8n Community](https://community.n8n.io/)### Project Structure



## 📚 Resources```

n8n-nodes-langfuse-prompt/

### Official Documentation├── credentials/

- [n8n Community Nodes Guide](https://docs.n8n.io/integrations/community-nodes/)│   └── LangfuseApi.credentials.ts

- [Langfuse API Documentation](https://langfuse.com/docs/api)├── nodes/

- [Langfuse Prompt Management](https://langfuse.com/docs/prompts)│   └── Langfuse/

│       ├── Langfuse.node.ts

### API References  │       ├── Langfuse.json

- [Langfuse Prompts API v2](https://langfuse.com/docs/api/prompts)│       └── langfuse.svg

- [n8n Node Development](https://docs.n8n.io/integrations/creating-nodes/)├── assets/

│   └── *.png

### Community├── docker/

- [n8n Community Forum](https://community.n8n.io/)│   └── Dockerfile

- [Langfuse Discord](https://discord.gg/langfuse)├── package.json

├── tsconfig.json

## 📄 License└── README.md

```

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Building and Testing

## 🙏 Acknowledgments

```bash

This project is based on the original [n8n-nodes-langfuse](https://github.com/langfuse/n8n-nodes-langfuse) by the Langfuse team. We extend our sincere gratitude to the original authors for creating the foundation that made this enhanced version possible.# Development mode with watch

npm run dev

---

# Production build

<div align="center">npm run build



**Built with ❤️ for the n8n and Langfuse communities**# Run tests (if available)

npm test

[⭐ Star this repo](https://github.com/rlquilez/n8n-nodes-langfuse-prompt) | [🐛 Report Bug](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues) | [✨ Request Feature](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues)```



</div>## 🤝 Contributing

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


<div align="center">

**Built with ❤️ for the n8n and Langfuse communities**

[⭐ Star this repo](https://github.com/rlquilez/n8n-nodes-langfuse-prompt) | [🐛 Report Bug](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues) | [✨ Request Feature](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/issues)

</div>
