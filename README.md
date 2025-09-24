# 🚀 n8n-nodes-langfuse-prompt

<div align="center">

**Enhanced Langfuse integration for n8n with advanced Prompt Management features**

[![npm version](https://badge.fury.io/js/n8n-nodes-langfuse-prompt.svg)](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20Node-FF6B6B.svg)](https://docs.n8n.io/integrations/community-nodes/)

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🔐 Credentials](#-credentials)
- [🎯 Operations](#-operations)
- [📝 Usage Examples](#-usage-examples)
- [🐳 Docker Setup](#-docker-setup)
- [🛠️ Development](#-development)
- [🤝 Contributing](#-contributing)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 Resources](#-resources)

## ✨ Features

### 🎯 Complete Prompt Management
- **🔍 Get Prompt**: Retrieve specific prompts by name, version, or label
- **📋 List Prompts**: Browse all prompts with advanced filtering and pagination
- **➕ Create Prompt**: Create new text or chat prompts directly from n8n workflows
- **✏️ Update Prompt**: Update prompt labels for environment management

### 🚀 Advanced Capabilities
- ✅ **Smart Filtering** - Filter by name, tags, and labels
- ✅ **Pagination Support** - Handle large prompt collections efficiently
- ✅ **Multiple Types** - Support for both text and chat prompts
- ✅ **Label Management** - Deploy prompts across different environments
- ✅ **Version Control** - Retrieve specific prompt versions
- ✅ **Bulk Operations** - Process multiple prompts efficiently

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

Browse and search through all available prompts with pagination support.

**Parameters:**
- `Page` *(optional)*: Page number for pagination (default: 1)
- `Limit` *(optional)*: Results per page (max: 100, default: 50)
- `Name Filter` *(optional)*: Filter prompts by name
- `Tag Filter` *(optional)*: Filter prompts by tag

**Example Response:**
```json
{
  "data": [
    {
      "name": "chatbot-prompt",
      "versions": [1, 2, 3],
      "lastUpdatedAt": "2024-01-15T10:30:00.000Z",
      "tags": ["chatbot", "support"]
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

### ✏️ Update Prompt

Update labels on existing prompt versions for environment management.

**Parameters:**
- `Prompt Name` *(required)*: Name of the prompt to update
- `Version` *(required)*: Version number to update
- `New Labels` *(required)*: New comma-separated labels

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

### Example 2: A/B Testing Pipeline

Create different prompt versions for testing:

```json
{
  "resource": "prompt",
  "operation": "create",
  "createPromptName": "welcome-v2",
  "promptType": "text",
  "promptContent": "Hello {{userName}}! Welcome to our improved service!",
  "labels": "testing,ab-test",
  "tags": "welcome,v2"
}
```

### Example 3: Environment Promotion

Promote a tested prompt to production:

```json
{
  "resource": "prompt",
  "operation": "update",
  "updatePromptName": "chatbot-prompt",
  "promptVersion": 3,
  "newLabels": "production,live"
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
