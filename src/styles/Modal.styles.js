import styled from 'styled-components';

export const ModalStyles = styled.div`
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: middle;
    color: black;
  }

  .popup_inner {
    position: relative;
    margin: auto;
    background: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
  }

  .exit {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #333;
    font-size: 24px;
  }

  .exit:hover {
    color: #999;
  }
`;
