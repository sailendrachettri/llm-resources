import React from 'react'
import {Link} from 'react-router-dom'

export const Cards = () => {
    return (
        <>
            <div className='container-fluid col-10 d-flex justify-content-start flex-wrap mt-3'>
                <h2>Learn Large Language Model</h2>
                <p className='mb-4'>A large language model (LLM) is a deep learning algorithm that can perform a variety of natural language processing (NLP) tasks.</p>

                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">History of NLP</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Natural language processing is an interdisciplinary subfield of computer science and information retrieval</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Large language model</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">A large language model is a language model notable for its ability to achieve general-purpose language generation and other natural language processing tasks such as classification</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Transformers</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Transformers are a deep learning architecture that can be used for natural language processing (NLP) tasks. </p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Inference Configuration</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">The inference configuration describes how to configure the model to make predictions.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Ollama</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Ollama is an open-source framework that allows users to run large language models (LLMs) locally on their machine.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Fine Tuning</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Fine-tuning is the process of taking a pretrained machine learning model and further training it on a smaller, targeted data set. </p>
                    </div>
                </div>

                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Retrieval augmented generation (RAG)</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Retrieval augmented generation (RAG) is a natural language processing (NLP) technique that combines the strengths of both retrieval- and generative-based artificial intelligence (AI) models.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Dataset</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">A collection of data pieces that can be treated by a computer as a single unit for analytic and prediction purposes.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Vector Database and Embeddings</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">Embeddings and Vector Databases With ChromaDB – Real Python
                            A vector database is a database that allows you to efficiently store and query embedding data.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">Essentials on LoRA, Quantization and Sharding Variants</Link>
                    <div className="card-body text-secondary">

                        <p className="card-text">
                            LoRa is a wireless modulation technique derived from Chirp Spread Spectrum (CSS) technology.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                    <Link to="#" className="card-header text-primary">LLM Apps</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">Application build on large language model. Youtube channels that helps you to understand how you can build your own LLM apps.</p>
                </div>
            </div>
            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">Language Processing Units (LPU)</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">Language Processing Units (LPUs) : LPUs are emerging as a pivotal technology in the areas of AI, designed specifically to optimise the performance of tasks related to language processing.</p>
                </div>
            </div>
            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">Pipeline</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">A pipeline is a collection of steps that automate machine learning workflows.</p>
                </div>
            </div>
            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">LLM Threats</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">Prompt injection, prompt extraction, new phishing schemes, and poisoned models are the most likely risks organizations face when using large language models.</p>
                </div>
            </div>
            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">Cloud GPUs</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">In cloud computing, GPUs are integrated into virtual machines, allowing users to access their computational power remotely</p>
                </div>
            </div>
            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">Explainable Artificial Intelligence</Link>
                <div className="card-body text-secondary">

                    <p className="card-text">Explainable AI is a set of tools and frameworks to help you understand and interpret predictions made by your machine learning models</p>
                </div>
            </div>

            <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
                <Link to="#" className="card-header text-primary">Prompt engineering</Link>
                <div className="card-body text-secondary">
                    <p className="card-text">Prompt engineering is the practice of designing inputs for AI tools that will produce optimal outputs.</p>
                </div>
            </div>
        </div >
        </>
    )
}