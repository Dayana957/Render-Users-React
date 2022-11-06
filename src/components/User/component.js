import SimpleText from "../shared/SimpleText";
import Link from "../shared/Link";
import Title from "../shared/Title";

import './style.css'

const User = ({ id, name, username, email, address, company, website, phone}) => (
    <div className="user-card" id={id} key={id}>
        <SimpleText className="id-span" text={'ID: ' + id} />
        <Title className="name-h3" text={name} />
        <SimpleText className="user-name" text={username} />
        <SimpleText className="email-p" text={'Email: ' + email} />
        <SimpleText className="address" text={'Address: ' + address.street} />
        <SimpleText className="company" text={'Company: ' + company.name} />
        <Link className="website" href={website} text={website} />
        <Link className="phone" href="#" text={phone} />
    </div>
)

export default User;