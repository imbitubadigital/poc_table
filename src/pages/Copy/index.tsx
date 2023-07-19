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
    <>
      <S.ContainerTableCopy id="tablesPredictions2">
        <table
          style={{
            width: '560px',
            borderCollapse: 'collapse',
            // position: 'absolute',
            // top: 0,
            // left: -7000,
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={4}
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="title">Scanometry</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              ></td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label" style={{ fontWeight: 'bold' }}>
                  <i>Right</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label" style={{ fontWeight: 'bold' }}>
                  <i>Left</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label" style={{ fontWeight: 'bold' }}>
                  <i>Difference</i>
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Thigh</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>51.3 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>51.8 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>0.5 cm (L)</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Leg</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>39.6 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>39.8 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>0.2 cm (L)</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Total</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>90.9 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>91.6 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>0.7 cm (L)</span>
              </td>
            </tr>
            <tr>
              <td
                colSpan={4}
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              ></td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Femoral Uneveness</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueFooter'}>0.1 cm (L)</span>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Ankle Uneveness</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueFooter'}>0 cm</span>
              </td>
            </tr>
          </tbody>
        </table>

        <p
          style={{
            marginBottom: '40px',
            // position: 'absolute',
            // top: 0,
            // right: 7000,
          }}
        >
          Highest or longest side: <span>(R)</span> = Right / <span>(L)</span> =
          Left
        </p>

        <table
          style={{
            width: '560px',
            borderCollapse: 'collapse',
            // position: 'absolute',
            // top: 0,
            // right: 7000,
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="title">Femorotibial Angles</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Axis</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Right</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Left</i>
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Mechanical (degrees)</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.7° (varus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.6° (valgus)</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Mechanical (cm)</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.3 cm (varus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.2 cm (valgus)</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className="label">
                  <i>Anatomical</i>
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>5.9° (valgus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 20px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>5.9° (valgus)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </S.ContainerTableCopy>
      <br />
      <br />
      <S.ContainerBtn>
        <button type="button" onClick={copy}>
          Copiar
        </button>
      </S.ContainerBtn>
    </>
  );
}
