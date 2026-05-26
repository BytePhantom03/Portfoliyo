export const projectsData = [
    {
        id: 1,
        name: 'Smart Meeting Assistant',
        description: ".....",
        tools: ['FastAPI', 'PostgreSQL', 'Pinecone', 'Redis', 'Celery', 'Google Gemini', 'Docker'],
        role: 'AI/ML Engineer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Autonomous Jira Workflow - MCP Agent System',
        description: 'Built a production-grade AI agent system to automate Jira subtask creation, worklog submission, status transitions, and timesheet synchronization with minimal manual effort. Developed custom MCP servers for Jira integration, browser automation, and notifications using LLM tool-use workflows with retry handling and debugging through Playwright. Integrated scheduled workflows, Twilio notifications, and a FastAPI dashboard for real-time monitoring and automation tracking.',
        tools: ['Python', 'Playwright', 'APScheduler', 'SQLite', 'FastAPI', 'Twilio', 'Docker', 'Azure', 'Jira REST API'],
        role: 'AI/ML Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'AI PDF Chatbot using RAG',
        description: 'Built an AI-powered PDF chatbot capable of answering user queries from uploaded documents using Retrieval-Augmented Generation (RAG). Implemented document parsing, chunking, embedding generation, and semantic search to retrieve relevant context from PDFs for accurate responses. Integrated Large Language Models with vector databases to enable context-aware conversational interaction and deployed the application with an interactive user interface for real-time document querying.',
        tools: ['Python', 'LangChain', 'FAISS', 'OpenAI API', 'Streamlit', 'PyPDF2', 'Sentence Transformers', 'Hugging Face'],
        code: '',
        role: 'AI/ML Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'Fashion Recommender System',
        description: "Engineered a content-based fashion recommendation system to provide visually similar clothing suggestions from a dataset of over 44,000 products. Extracted 2048-dimensional image feature vectors using a pre-trained ResNet50 model with TensorFlow and implemented efficient similarity search using Facebook AI’s FAISS library. Deployed the recommendation engine as an interactive Streamlit web application for real-time product recommendations",
        tools: ['Streamlit', 'TensorFlow', 'ResNet50', 'Scikit-learn', 'FAISS', 'NumPy', 'Pandas'],
        code: '',
        demo: '',
        role: 'AI/ML Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },