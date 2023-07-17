import React from 'react';

import * as S from './styles';

export function Copy() {
  const copy = () => {
    const table = document.querySelector<HTMLDivElement>('#tablesPredictions2');
    if (table) {
      navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([table.outerHTML], { type: 'text/html' }),
        }),
      ]);
    }
  };
  return (
    <S.Container>
      <S.BoxTable id="tablesPredictions2">
        <table
          style={{
            width: '700px',
            borderCollapse: 'collapse',
            // position: 'absolute',
            // top: -9000,
            // left: -700,
          }}
        >
          <tr>
            <th
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
              colSpan={4}
            >
              Minha Tabela x
            </th>
          </tr>
          <tr>
            <th
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Nome
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Idade
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Email
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Cidade
            </th>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#fff', display: 'block' }}>-</span>
              John Doe x
              <span style={{ color: '#fff', display: 'block' }}>-</span>
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#fff', display: 'block' }}>-</span>
              30
              <span style={{ color: '#fff', display: 'block' }}>-</span>
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#fff', display: 'block' }}>-</span>
              span block white
              <span style={{ color: '#fff', display: 'block' }}>-</span>
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#fff', display: 'block' }}>-</span>
              New York
              <span style={{ color: '#fff', display: 'block' }}>-</span>
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <br />
              Jane Smith
              <br />
              <br />
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <br />
              25
              <br />
              <br />
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <br />
              only BR
              <br />
              <br />
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <br />
              London
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Mark Johnson
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              35
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              padding CSS
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Paris
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Sara Williams
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              28
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              sarawilliams@example.com
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Tokyo
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Michael Brown
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              32
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              michaelbrown@example.com
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Sydney
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Emily Davis
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              29
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              emilydavis@example.com
            </td>
            <td
              style={{
                border: '1px solid black',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              Toronto
            </td>
          </tr>
        </table>
      </S.BoxTable>
      <button type="button" onClick={copy}>
        <span>Copiar</span>
      </button>
    </S.Container>
  );
}
