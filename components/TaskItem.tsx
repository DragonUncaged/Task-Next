import { RefreshData } from "./TaskForm";

export default function TaskItem({ id, name }: any) {
    async function deleteTask(id: string | number) {
        fetch("http://localhost:3000/api/delete", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id),
        })
            .then(() => RefreshData());
    }

    return (
        <>
            <li className="border-l-4 border-blue-600 p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-full font-semibold transition duration-300 ease-in-out" onClick={() => deleteTask(id)}>x</button>
                </div>
            </li>
        </>
    );
}