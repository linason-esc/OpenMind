import React, { useState } from 'react';
import Styles from '../Styles/PostnAnswerLayout.module.css';
import LOGO from '../Assets/Images/imageLogo.svg';
import MESSAGE_ICON from '../Assets/Icon/iconMessages.svg';
import ShareButton from '../Components/Button/ShareButton';
import Toast from '../Components/Toast';

const PostnAnswerLayout = ({ name, imageSource, questionCount, children }) => {
  const currentUrl = window.location.href;
  const [showToast, setShowToast] = useState(false);

  const copyURLtoClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      })
      .catch(error => alert('링크 복사 실패 : ', error));
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
  };

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.header}>
          {/* <a href="/" className={Styles.logo}>
          <img src={LOGO} className={Styles.logoImg} alt="로고이미지" />
        </a> */}
        </div>
        <div className={Styles.main}>
          <div className={Styles.profileArea}>
            <a href="/" className={Styles.logo}>
              <img src={LOGO} className={Styles.logoImg} alt="로고이미지" />
            </a>
            <div className={Styles.profileGroup}>
              <img src={imageSource} className={Styles.profileImage} />
              <div className={Styles.username}>{name}</div>
              <ShareButton onClickLink={copyURLtoClipboard} onClickFacebook={shareFacebook} />
              {showToast && <Toast />}
            </div>
          </div>
          <div className={Styles.feedContainer}>
            <div className={Styles.questionInfo}>
              <img src={MESSAGE_ICON} className={Styles.messageIcon} />
              {questionCount ? (
                <div className={Styles.infoText}>{questionCount}개의 질문이 있습니다.</div>
              ) : (
                <div className={Styles.infoText}>아직 질문이 없습니다.</div>
              )}
            </div>
            <div className={Styles.questionArea}>
              {children}
              {/*children은 승현언니는 FeedCard로 지인은 AnswerFeedCard로*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostnAnswerLayout;
