import { Lightning } from "phosphor-react";

export function ButtonChallenges() {
    return (
        <a href="" className="p-4 text-sm border border-blue-600 text-blue-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600 hover:text-gray-900 transition-colors">
            <Lightning size={24} />
            Acesse o desafio
        </a>
    )
}