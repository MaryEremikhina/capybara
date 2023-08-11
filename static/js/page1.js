import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "{{url_for('static', filename='css/page1.module.css')}}";
const PAGE1 = () => {
  const navigate = useNavigate();

  const onHOMEClick = useCallback(() => {
    navigate("/page2");
  }, [navigate]);

  return (
    <div className={styles.page1}>
      <div className={styles.frame}>
        <div className={styles.titleNoname}>TITLE NONAME</div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur. Id diam vitae bibendum egestas nullam dignissim interdum leo amet. Cras morbi potenti non porta arcu sem fames leo. Diam nibh mattis pharetra congue nam venenatis nec commodo interdum. Feugiat sit donec morbi et massa. Aliquam ullamcorper commodo neque porta mauris. Ultrices facilisis at nisl non volutpat auctor cursus neque pellentesque. Fringilla aliquam consectetur placerat aenean. Scelerisque amet pulvinar suspendisse tellus habitant urna mauris quam. `}</div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.header}>
          <button className={styles.home} onClick={onHOMEClick}>
            HOME
          </button>
          <div className={styles.titleNoname}>ABOUT</div>
          <div className={styles.titleNoname}>CONTACT US</div>
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default PAGE1;
