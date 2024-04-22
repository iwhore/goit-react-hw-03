import css from "./Contact.module.css"

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
      </div>

      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}