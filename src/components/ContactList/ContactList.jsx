import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete }) {
    return (
      <ul className={css.listContainer}>
        {contacts.map((item) => (
          <li className={css.list} key={item.id}>
            <Contact contact={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
}