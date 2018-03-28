import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Footer = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>GitHub</a>
        </Link>
        <Link href="/list_serials">
            <a style={linkStyle}>Facebook</a>
        </Link>
        <Link href="/list_serials">
            <a style={linkStyle}>Telegram</a>
        </Link>
    </div>
);

export default Footer