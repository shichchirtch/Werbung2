import { useParams } from 'react-router-dom'
import { useState } from 'react'
import HomeButton from '../components/common/HomeButton.jsx'
import ButtonZuruck from "../components/common/ButtonZuruck.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../features/messages/messagesSlice.js'

const currentUser = {
    id: 'user_1',
    name: 'Ivan'
}

function AdDetailsPage() {
    const { id } = useParams()
    const [showChat, setShowChat] = useState(false)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const allWerbungen = useSelector((state) => state.werbung.werbungen)

    const werbung = allWerbungen.find(
        (item) => String(item.id) === id
    )

    const allMessages = useSelector((state) => state.messages.messages)

    const messages = werbung
        ? allMessages.filter((m) => m.adId === werbung.id)
        : []

    const handleSend = () => {
        if (!message.trim()) return

        const newMessage = {
            id: Date.now(),
            adId: werbung.id,
            fromUser: currentUser.id,
            fromName: currentUser.name,
            text: message,
            createdAt: new Date().toISOString(),
        }


        dispatch(addMessage(newMessage))
        setMessage('')
    }



    if (!werbung) return null

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-black px-4 py-6">

            {/* HEADER */}
            <div className="
        flex justify-center gap-4 mb-6
        bg-white/5 border border-white/10
        backdrop-blur-md
        p-3 rounded-3xl w-fit mx-auto
      ">
                <ButtonZuruck />
                <HomeButton />
            </div>

            <div className="max-w-xl mx-auto flex flex-col gap-4">

                {/* IMAGE */}
                {werbung.photos?.length > 0 && (
                    <img
                        src={werbung.photos[0]}
                        alt="ad"
                        className="w-full h-64 object-cover rounded-3xl border border-white/10"
                    />
                )}

                {/* CARD */}
                <div className="
          bg-white/5 border border-white/10
          rounded-3xl p-5 backdrop-blur-md
        ">

                    <h1 className="text-2xl font-bold text-white mb-2">
                        {werbung.title}
                    </h1>

                    <p className="text-gray-400 mb-2">
                        PLZ: {werbung.plz}
                    </p>

                    {werbung.price && (
                        <p className="text-cyan-300 font-semibold mb-3">
                            {werbung.price}
                        </p>
                    )}

                    <p className="text-gray-300 leading-relaxed">
                        {werbung.description}
                    </p>

                </div>

                {/* ACTION */}
                <button onClick={() => setShowChat((prev) => !prev)}
                    className="
            py-4 rounded-2xl font-bold text-black text-lg
            bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600
            shadow-lg shadow-pink-500/40
            active:scale-95 transition
          "
                >
                    💬 Kontaktieren
                </button>

                {showChat && (
                    <div className="mt-4 bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-md">

                        <div className="max-h-60 overflow-y-auto flex flex-col gap-2 mb-3">

                            {messages.length === 0 ? (
                                <p className="text-gray-400 text-sm">Noch keine Nachrichten</p>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className="bg-cyan-500/20 text-white p-2 rounded-xl text-sm self-start"
                                    >
                                        {msg.text}
                                    </div>
                                ))
                            )}

                        </div>

                        <div className="flex gap-2">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Nachricht..."
                                className="flex-1 bg-black/40 text-white p-3 rounded-xl border border-white/10 outline-none"
                            />

                            <button
                                onClick={handleSend}
                                className="px-4 rounded-xl bg-cyan-400 text-black font-bold"
                            >
                                →
                            </button>
                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default AdDetailsPage