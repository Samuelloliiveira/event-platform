import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/graphql-generate";

export function Subscribe() {
    const navigate = useNavigate()//redireciona o usuário para outra página sem precisar clicar em nenhum link

    // variáveis de estado reflete na tela toda vez que seu valor é modificado.
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Prepare-se para <strong className="text-blue-600">falar inglês</strong>, do zero, em <strong className="text-blue-600">2022</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai participar de uma experiência de imersão cultural instigante, ajudando você a pensar em inglês e tornando seu aprendizado muito mais fácil.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-700 uppercase py-4 rounded font-bold text-sm hover:bg-green-500 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/mockup-students.png" className="mt-10" alt="" />
        </div>
    )
}

/**
 * OBS: Não é recomendado enviar dados para o GraphCMS pelo frontend, o certo 
 * é ter algum backend fazendo essa conexão, como a aplicação aqui é simples e 
 * somente para estudos fizemos apenas com o front.
 */