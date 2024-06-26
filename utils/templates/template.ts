export const templateConstance = `
<!DOCTYPE html>
<html lang="es">

<head>
    <base href="/utils/templates/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Constancia de servicio</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Calibri;
            font-size: 10pt;
            box-sizing: border-box;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 3cm;
            padding: 24px;
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }

        .textContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
        }

        h5 {
            font-size: 8pt;
            font-weight: bold;
            text-align: center;
            padding: 16px;
        }

        h5,
        h6,
        h2,
        h3 {
            font-style: italic;
        }

        span {
            font-weight: bold;
            font-size: 8pt;
        }

        h4 {
            flex: 1;
            border-bottom: 1px solid black;
            height: 42px;
            text-align: center;
            margin-left: 14px;
            vertical-align: bottom;
            font-size: 22pt;
            font-weight: normal;
        }
    </style>
</head>

<body
    style="width: 21cm;height: 29.7cm;border: 1px solid black;display: flex;flex-direction: column;justify-content: space-between;">
    <header>
        <div style="display: flex; flex-direction: row;width: 90%; justify-content: space-between;align-items: center;">
            <img src="./Logo Hospital San Juan de Dios -Original-.png" width="248px" height="auto" />
            <div style="display: flex; flex-direction: column; justify-content: flex-end; align-items: end;">
                <p style="font-size: 11pt; font-weight: bold;">Dpto. MANTENIMIENTO</p>
                <p style="font-size: 9pt; color: blue; text-decoration: underline; font-weight: bold;">
                </p>
            </div>
        </div>

    </header>


    <div style="display: flex; width: 90%; padding-top: 30px; padding-bottom: 10px; margin: auto; ">
        <hr style="border: 5px solid #00b0f0;width: 15%;">
        <hr style="border: 5px solid #285182;width: 85%;">
    </div>

    <main >
        <h1 style="font-size: 12pt; padding-top: 32px; padding-bottom: 32px;">ORDEN DE TRABAJO N° {{_id}}</h1>

        <table border="1" style="width: 80%; align-self: flex-end; margin-right: 10%;">
            <thead>
                <tr style="height: 40px;">
                    <th >SERVICIO <br> SOLICITANTE</th>
                    <th colspan="5" style="font-weight: normal;" >{{sector}}</th>
                </tr>
                <tr style="height: 40px;">
                    <th style="width: 125px;">RESPONSABLE DE LA SOLICITUD</th>
                    <th style="width: 125px;">SUB SECTOR</th>
                    <th style="width: 80px;">PRIORIDAD</th>
                    <th style="width: 125px;">PERSONAL <br> ASIGNADO</th>
                    <th style="width: 85px;">FECHA DE ASISTENCIA</th>
                    <th style="width: 85px;">HORA DE ASISTENCIA</th>
                </tr>
            </thead>
            <tbody>
                <tr style="margin-top: 100px;">
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;">{{name}}</th>
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;">{{subSector}}</th>
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;">{{priority}}</th>
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;"></th>
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;"></th>
                    <th colspan="1" style="padding-top:10px;padding-bottom:10px;font-weight: normal;"></th>
                </tr>
            </tbody>
        </table>

        <table border="1" style="width: 80%;">
            <thead>
                <tr style="height: 50px;">
                    <th>DESCRIPCION DE SOLICITUD</th>
                </tr>
            </thead>
            <tbody>
                <tr style="height: 150px;">
                    <th style="height: auto; align-content: baseline;text-align: left; padding: 10px;">{{description}}</th>
                </tr>
            </tbody>
        </table>

        <table border="1" style="width: 80%;">
            <thead>
                <tr style="height: 50px;">
                    <th colspan="6">DESCRIPCION DE SOLICITUD</th>
                </tr>
            </thead>
            <tbody>
                <tr style="height: 30px;">
                    <th>TAREA O FALLA</th>
                    <th style="width: 30px;"></th>
                    <th >FALLA OBSERVADA Y SOLUCION</th>
                    <th style="width: 30px;"></th>
                    <th>REQUIERE REPUESTOS/INSUMOS</th>
                    <th style="width: 30px;"></th>
                </tr>
                <tr style="height: 30px;">
                    <th colspan="6"></th>
                </tr>
                <tr style="height: 30px;">
                    <th colspan="6"></th>
                </tr>
                <tr style="height: 30px;">
                    <th colspan="6"></th>
                </tr>
                <tr style="height: 30px;">
                    <th colspan="6"></th>
                </tr>
                <tr style="height: 30px;">
                    <th colspan="6"></th>
                </tr>
            </tbody>
        </table>

        <table border="1" style="width: 80%;">
            <thead>
                <tr style="height: 30px;">
                    <th style="width: 50%;">FIRMA Y ACLARACION CONFORMIDAD DEL SERVICIO</th>
                    <th style="width: 50%;">FIRMA Y ACLARACION RESPONSABLE DEL TRABAJO</th>
                </tr>
            </thead>
            <tbody>
                <tr style="height: 50px;">
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>

    </main>
    <footer style="text-align: center;height: 40px;">
        
    </footer>
</body>

</html>
`