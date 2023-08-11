import styles from "{{url_for('static', filename='css/page2.module.css')}}";
const PAGE2 = () => {
  return (
    <div className={styles.page2}>
      <div className={styles.frame}>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Vel nunc quis nam orci
          bibendum tellus bibendum. At pellentesque lectus netus tortor integer
          arcu elit nulla. Tempor metus amet sit enim risus. Sit quam sed
          porttitor turpis scelerisque venenatis sed elit erat. Pharetra quis
          quam lorem quis volutpat posuere volutpat non. Dui lorem molestie
          eleifend elementum maecenas velit. Vestibulum pretium enim dignissim
          ullamcorper tincidunt tortor. Consectetur auctor ut quis turpis
          pellentesque consectetur phasellus nibh. Purus mattis viverra volutpat
          pretium senectus mauris at.
        </div>
        <div className={styles.sos}>SOS</div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.header}>
            <div className={styles.home}>HOME</div>
            <div className={styles.home}>ABOUT</div>
            <div className={styles.home}>CONTACT US</div>
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default PAGE2;
