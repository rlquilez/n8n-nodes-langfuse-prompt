# Changelog v1.3.0 - MCP Integration & UI Improvements

## 🎉 Release Date: December 2024

## 🚀 Major Features

### 🤖 MCP Server Integration
- **Added `usableAsTool: true`** - The Langfuse Prompts node is now compatible with n8n's Model Context Protocol (MCP) workflows
- **AI Agent Compatible** - Can be used as a tool by AI agents in MCP server environments
- **Dynamic Integration** - AI agents can automatically call Langfuse operations based on context
- **Seamless Workflows** - Works with both MCP Client Tool and MCP Server Trigger nodes

### 🎯 UI/UX Improvements  
- **Streamlined Interface** - Removed the optional "Include Description" checkbox from List Prompts operation
- **Cleaner User Experience** - Simplified parameter selection for better workflow creation
- **Focused Functionality** - Descriptions are now always included in List Prompts for consistency

## 📚 Documentation Enhancements
- **Comprehensive MCP Guide** - Added detailed section explaining MCP integration and use cases
- **Real-world Examples** - Included practical examples of AI-driven prompt management
- **Usage Scenarios** - Documented common patterns for dynamic RAG, contextual responses, and automated prompt creation
- **Architecture Diagrams** - Clear workflow examples showing AI Agent → MCP → Langfuse integration

## 🔧 Technical Improvements
- **Enhanced Keywords** - Added MCP-related keywords to package.json for better discoverability
- **Updated Description** - Package description now mentions MCP integration
- **Version Alignment** - Proper versioning with comprehensive changelog

## 🎯 Use Cases Enabled

### AI-Driven Prompt Management
- **Dynamic RAG**: AI retrieves relevant prompts based on user queries
- **Contextual Responses**: AI selects appropriate prompts for different scenarios  
- **Prompt Discovery**: AI searches for prompts containing specific terms or concepts
- **Automated Creation**: AI creates new prompts based on conversation patterns

### MCP Integration Patterns
- **Tool Integration**: `AI Agent → MCP Client Tool → Langfuse Prompts → Response`
- **Server Exposure**: External AI systems can call Langfuse operations via MCP Server Trigger
- **Context-Aware Selection**: Intelligent prompt selection based on conversation context
- **Automated Workflows**: Seamless integration between AI reasoning and prompt management

## 🧪 Breaking Changes
- ❌ **None** - This is a backward-compatible release
- ✅ **Existing Workflows** - All existing workflows continue to work unchanged
- ✅ **API Compatibility** - All existing API operations remain the same

## 🚀 Migration Guide
No migration required! Simply update to v1.3.0 and optionally explore MCP integration features.

## 🔗 Resources
- **NPM Package**: [n8n-nodes-langfuse-prompt@1.3.0](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)
- **GitHub Release**: [v1.3.0](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/releases/tag/v1.3.0)
- **Documentation**: Updated README with MCP integration examples
- **MCP Documentation**: [n8n MCP Integration Guide](https://docs.n8n.io/)

## 🙏 Acknowledgments
This release builds upon the foundation of full text search capabilities introduced in v1.2.0 and adds cutting-edge AI agent integration capabilities through MCP support.

---

**Next Steps**: Explore AI workflows by connecting this node with n8n's MCP Client Tool or expose it via MCP Server Trigger for external AI systems! 🤖🚀