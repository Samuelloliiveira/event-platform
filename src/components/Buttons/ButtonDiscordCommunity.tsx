import { DiscordLogo } from "phosphor-react";

export function ButtonDiscordCommunity() {
    return (
        <a href="" className="p-4 text-sm bg-green-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-500 transition-colors">
            <DiscordLogo size={24} />
            Comunidade do Discord
        </a>
    )
}