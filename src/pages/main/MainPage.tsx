import React, { ReactElement, useState } from 'react';

import Modal from '../../components/modal';
import * as S from './styled';

type MainPageProps = {};

export default function MainPage(_: MainPageProps): ReactElement {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <Modal 
        className='modal-root'
        closable={ true }
        onClose={ () => setModalVisible(!modalVisible) }
        maskClosable={ true }
        visible={ modalVisible }
      >
        <div>Modal</div>
      </Modal>
      <button onClick={ () => setModalVisible(true) }>모달 열기 </button>
    </S.Container>

  );
}
