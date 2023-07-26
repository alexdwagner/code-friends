import { useState, ChangeEvent, KeyboardEvent } from 'react';

export type FormData = {
    title: string;
    description: string;
    tags: string[];
};

console.log("Current formData:", FormData);

type CreatePostProps = {
    onPostSubmit: (formData: FormData) => void;
};

const CreatePost: React.FC<CreatePostProps> = ({ onPostSubmit }) => {
    console.log("CreatePost component has been mounted.");
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        tags: [],
    });

    const handleTagInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = e.currentTarget.value;
            if (value && formData.tags.length < 3) {
                setFormData(prev => ({ ...prev, tags: [...prev.tags, value.trim()] }));
                e.currentTarget.value = '';
            }
        }
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("Submitting form data:", formData);
            onPostSubmit(formData);
            console.log("Form data submitted successfully");
        } catch (error) {
            console.error("Error while submitting form data:", error);
        }
    };    

    return (
        <div className="post-card bg-white p-6 rounded shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4 rounded-box">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows={5} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">Tags (Press &apos;Enter&apos; to add a tag. Max 3 tags)</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags" type="text" onKeyPress={handleTagInput} />
                    <div className="flex space-x-2 mt-2">
                        {formData.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gray-200 rounded px-2 py-1 text-sm">{tag}</span>
                        ))}
                    </div>
                    {formData.tags.length >= 3 && 
                        <p className="text-red-500 text-sm mt-2">You've reached the maximum of 3 tags.</p>
                    }
                </div>

                <button className="connect-btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-5 rounded transition duration-300" type="submit">Publish</button>
            </form>
        </div>
    );
}

export default CreatePost;
