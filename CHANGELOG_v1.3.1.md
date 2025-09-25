# Changelog v1.3.1 - Documentation & Description Corrections

## 🎯 Release Date: September 2025

## 🔧 Critical Fix: Accurate Descriptions

This is an important patch release that fixes misleading documentation and descriptions about the node's capabilities.

### ❌ What Was Incorrect (Fixed)
- **Misleading CRUD Claims**: The node description incorrectly stated "complete CRUD operations"
- **Unsupported Operations**: Documentation mentioned Update and Delete operations that don't exist
- **False Expectations**: Users might expect functionality that isn't available via Langfuse public API

### ✅ What's Now Accurate
- **Honest Descriptions**: Node description now states "Advanced Langfuse Prompt Management for retrieving, searching, and creating prompts"
- **Clear Feature List**: Documentation focuses only on supported operations
- **API Transparency**: Clear explanation of what Langfuse public API v2 actually supports

## 📝 Documentation Updates

### Node Description
**Before**: "Advanced Langfuse Prompt Management with complete CRUD operations"
**After**: "Advanced Langfuse Prompt Management for retrieving, searching, and creating prompts"

### Features Section  
**Removed**:
- ❌ "Update Prompt: Update existing prompts with new content, config and metadata"
- ❌ "Delete Prompt: Remove prompts permanently from Langfuse"  
- ❌ "Complete CRUD - Full Create, Read, Update, Delete operations"

**Kept** (Accurate):
- ✅ "Get Prompt: Retrieve specific prompts by name, version, or label"
- ✅ "List Prompts: Browse all prompts with advanced filtering and pagination"  
- ✅ "Create Prompt: Create new text or chat prompts directly from n8n workflows"

### API Operations Section
Restructured from negative "Note on Update/Delete Operations" to positive "API Operations Supported":

**Now Shows**:
- ✅ `GET /api/public/v2/prompts` - List prompts with filtering and search
- ✅ `POST /api/public/v2/prompts` - Create new prompts
- ✅ `GET /api/public/v2/prompts/[name]` - Get specific prompt by name

## 🔧 Technical Changes

### Files Updated:
- **`LangfusePrompts.node.ts`** - Corrected node description
- **`README.md`** - Comprehensive documentation cleanup  
- **`IMPLEMENTATION_SUMMARY.md`** - Removed outdated Update operation references
- **`package.json`** - Version bump to 1.3.1

### No Breaking Changes
- ✅ **Existing Workflows**: All current workflows continue to work exactly the same
- ✅ **API Compatibility**: No changes to actual functionality
- ✅ **Parameters**: All existing parameters remain unchanged

## 🎯 Why This Matters

### User Experience
- **Clear Expectations**: Users know exactly what the node can and cannot do
- **No Confusion**: No more attempts to use non-existent operations
- **Trust**: Honest documentation builds confidence in the tool

### Technical Accuracy
- **API Alignment**: Documentation matches Langfuse public API v2 capabilities
- **Transparency**: Clear about API limitations and workarounds
- **Professional**: Accurate descriptions reflect software quality

## 🚀 What You Can Do

### Supported Operations (Use These!)
1. **Get Prompt** - Retrieve specific prompts by name, version, or label
2. **List Prompts** - Browse and search prompts with advanced filtering
3. **Create Prompt** - Build new text or chat prompts in your workflows

### For Updates/Deletes
- **Updates**: Create new versions of existing prompts using Create operation
- **Deletes**: Use the Langfuse web interface (not available via public API)

## 🔗 Resources
- **NPM Package**: [n8n-nodes-langfuse-prompt@1.3.1](https://www.npmjs.com/package/n8n-nodes-langfuse-prompt)
- **GitHub Release**: [v1.3.1](https://github.com/rlquilez/n8n-nodes-langfuse-prompt/releases/tag/v1.3.1)  
- **Updated Documentation**: Check the README for accurate feature descriptions

## 🙏 Thank You

Thank you to the community for pointing out these inaccuracies. This type of feedback helps maintain quality and trust in open source tools.

---

**Migration**: No action required! This is purely a documentation fix - your existing workflows continue to work unchanged. ✅