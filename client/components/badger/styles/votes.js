import { css } from '@emotion/react'

export const votes = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 28px;
  padding: 4px 16px;

  span {
    color: #fff;
    font-weight: 700;
  }

  button {
    color: rgb(102 230 139);

    :hover {
      color: rgb(255, 111, 0);
    }

    :active {
      color: orangered;
    }
  }
`
