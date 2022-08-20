import { typeWriterMessages, LARGE_LOGO_White, LARGE_LOGO_Black } from '../constants.js'
import TypeWriter from './Typewriter'
import { TextButton } from './TextButton'
export const LandingIntro = () => (
    <div className='welcome-wrapper'>
        <img
            className="welcome-logo"
            src={LARGE_LOGO_White}
            alt="DA Logo"
        />
        <TypeWriter messages={typeWriterMessages} />
        <div className="learn-more">
            <TextButton text={"Learn More"} link={"/about"} />
        </div>
    </div>
)