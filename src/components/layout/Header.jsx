import { useNavigate, useLocation } from 'react-router-dom'
import AuthButton from '../common/AuthButton'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    const isHome = location.pathname === '/'

    return (
        <div className="max-w-xl mx-auto flex items-center justify-between mb-4">

            {/* LEFT SIDE */}
            <div className="flex gap-2">

                {!isHome && (
                    <button
                        onClick={() => navigate(-1)}
                        className="
                            px-4 py-2 rounded-xl
                            font-semibold text-sm text-black
                            bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500
                            shadow-lg shadow-cyan-400/30
                            active:scale-95 transition
                        "
                    >
                        ←
                    </button>
                )}

                <button
                    onClick={() => navigate('/')}
                    className="
                        px-4 py-2 rounded-xl
                        font-semibold text-sm text-black
                        bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500
                        shadow-lg shadow-cyan-400/30
                        active:scale-95 transition
                    "
                >
                    🏠
                </button>

            </div>

            {/* RIGHT SIDE */}
            <AuthButton />

        </div>
    )
}

export default Header