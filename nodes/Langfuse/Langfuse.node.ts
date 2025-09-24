import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Langfuse implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Langfuse',
		name: 'langfuse',
		icon: 'file:langfuse.svg',
		group: ['transform'],
		version: 1,
		description: 'Advanced Langfuse Prompt Management with complete CRUD operations',
		defaults: {
			name: 'Langfuse Prompts',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'langfuseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.host}}',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Prompt',
						value: 'prompt',
					},
				],
				default: 'prompt',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['prompt'],
					},
				},
				options: [
					{
						name: 'Get Prompt',
						value: 'get',
						action: 'Get a prompt',
						description: 'Retrieve a specific prompt by name',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/public/v2/prompts/{{$parameter["promptName"]}}',
							},
						},
					},
					{
						name: 'List Prompts',
						value: 'list', 
						action: 'List prompts',
						description: 'List all prompts with pagination and filtering',
						routing: {
							request: {
								method: 'GET',
								url: '/api/public/v2/prompts',
							},
						},
					},
					{
						name: 'Create Prompt',
						value: 'create',
						action: 'Create a prompt',
						description: 'Create a new prompt in Langfuse',
						routing: {
							request: {
								method: 'POST',
								url: '/api/public/v2/prompts',
							},
						},
					},
					{
						name: 'Update Prompt',
						value: 'update',
						action: 'Update a prompt',
						description: 'Update labels of an existing prompt version',
						routing: {
							request: {
								method: 'PATCH',
								url: '=/api/public/v2/prompts/{{$parameter["promptName"]}}/versions/{{$parameter["promptVersion"]}}',
							},
						},
					},
				],
				default: 'get',
			},

			// Get Prompt fields
			{
				displayName: 'Prompt Name',
				name: 'promptName',
				type: 'string',
				required: true,
				default: '',
				description: 'The name of the prompt to retrieve from Langfuse',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Prompt Label',
				name: 'label',
				type: 'string',
				required: true,
				default: 'production',
				description: 'Deployment label of the prompt version to retrieve (defaults to Production)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['get'],
					},
				},
				routing: {
					request: {
						qs: {
							label: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Version',
				name: 'version',
				type: 'number',
				default: '',
				description: 'Specific version number to retrieve (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['get'],
					},
				},
				routing: {
					request: {
						qs: {
							version: '={{$value}}',
						},
					},
				},
			},

			// List Prompts fields
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for pagination',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['list'],
					},
				},
				routing: {
					request: {
						qs: {
							page: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['list'],
					},
				},
				routing: {
					request: {
						qs: {
							limit: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Name Filter',
				name: 'nameFilter',
				type: 'string',
				default: '',
				description: 'Filter prompts by name (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['list'],
					},
				},
				routing: {
					request: {
						qs: {
							name: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Tag Filter',
				name: 'tagFilter',
				type: 'string',
				default: '',
				description: 'Filter prompts by tag (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['list'],
					},
				},
				routing: {
					request: {
						qs: {
							tag: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Label Filter',
				name: 'labelFilter',
				type: 'string',
				default: '',
				description: 'Filter prompts by label (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['list'],
					},
				},
				routing: {
					request: {
						qs: {
							label: '={{$value}}',
						},
					},
				},
			},

			// Create Prompt fields
			{
				displayName: 'Prompt Name',
				name: 'createPromptName',
				type: 'string',
				required: true,
				default: '',
				description: 'Name for the new prompt',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							name: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Prompt Type',
				name: 'promptType',
				type: 'options',
				options: [
					{
						name: 'Text',
						value: 'text',
						description: 'Simple text prompt',
					},
					{
						name: 'Chat',
						value: 'chat',
						description: 'Chat-style prompt with messages',
					},
				],
				default: 'text',
				required: true,
				description: 'The type of prompt to create',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							type: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Prompt Content',
				name: 'promptContent',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				required: true,
				default: '',
				description: 'The content of the text prompt',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
						promptType: ['text'],
					},
				},
				routing: {
					request: {
						body: {
							prompt: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Chat Messages',
				name: 'chatMessages',
				type: 'json',
				required: true,
				default: '[\n  {\n    "role": "system",\n    "content": "You are a helpful assistant"\n  },\n  {\n    "role": "user",\n    "content": "{{question}}"\n  }\n]',
				description: 'Array of chat messages with role and content',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
						promptType: ['chat'],
					},
				},
				routing: {
					request: {
						body: {
							prompt: '={{JSON.parse($value)}}',
						},
					},
				},
			},
			{
				displayName: 'Labels',
				name: 'labels',
				type: 'string',
				default: 'production',
				description: 'Comma-separated list of labels for the prompt',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							labels: '={{$value.split(",").map(l => l.trim()).filter(l => l)}}',
						},
					},
				},
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Comma-separated list of tags for the prompt (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							tags: '={{$value ? $value.split(",").map(t => t.trim()).filter(t => t) : []}}',
						},
					},
				},
			},
			{
				displayName: 'Config (JSON)',
				name: 'config',
				type: 'json',
				default: '{}',
				description: 'Configuration object for the prompt (optional)',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							config: '={{JSON.parse($value)}}',
						},
					},
				},
			},
			{
				displayName: 'Commit Message',
				name: 'commitMessage',
				type: 'string',
				default: '',
				description: 'Optional commit message for the prompt version',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['create'],
					},
				},
				routing: {
					request: {
						body: {
							commitMessage: '={{$value || null}}',
						},
					},
				},
			},

			// Update Prompt fields
			{
				displayName: 'Prompt Name',
				name: 'updatePromptName',
				type: 'string',
				required: true,
				default: '',
				description: 'Name of the prompt to update',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['update'],
					},
				},
			},
			{
				displayName: 'Prompt Version',
				name: 'promptVersion',
				type: 'number',
				required: true,
				default: 1,
				description: 'Version number of the prompt to update',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['update'],
					},
				},
			},
			{
				displayName: 'New Labels',
				name: 'newLabels',
				type: 'string',
				required: true,
				default: '',
				description: 'Comma-separated list of new labels to assign to this prompt version',
				displayOptions: {
					show: {
						resource: ['prompt'],
						operation: ['update'],
					},
				},
				routing: {
					request: {
						body: {
							newLabels: '={{$value.split(",").map(l => l.trim()).filter(l => l)}}',
						},
					},
				},
			},
		],
	};
}
