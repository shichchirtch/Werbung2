import { useNavigate } from 'react-router-dom'

function HomeButton() {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate('/')}
            className="
                mb-5 px-5 py-3 rounded-2xl
                font-bold text-black text-base
                bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500
                shadow-lg shadow-cyan-400/30
                active:scale-95 transition
            "
        >
            🏠 Home
        </button>
    )
}

export default HomeButton