import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Vladyslav Zhylenko</p>
          <p>
            Contact us:
            <a href="zhilenkovlad1997@gmail.com">
              zhilenkovlad1997@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
