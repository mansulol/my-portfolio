// Styles
import './GlassEffectCard.scss'

export default function GlassEffectCard( {children}: { children: React.ReactNode }) {
    return (
        <div className="wrapper-glass-effect-card">
            { children }
        </div>
    )
}