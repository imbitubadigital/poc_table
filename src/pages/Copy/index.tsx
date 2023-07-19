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
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              ></td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Right
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Left
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Difference
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Thigh
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>51.3 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>51.8 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Leg
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>39.6 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>39.8 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Total
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>90.9 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'value'}>91.6 cm</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              ></td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Femoral Uneveness
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Ankle Uneveness
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Axis
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Right
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Left
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Mechanical (degrees)
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.7° (varus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Mechanical (cm)
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>0.3 cm (varus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  Anatomical
                </span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                  textAlign: 'center',
                }}
              >
                <span className={'valueAngle'}>5.9° (valgus)</span>
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
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
