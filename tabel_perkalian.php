<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel Perkalian 10x10 Interaktif</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
            cursor: pointer;
        }
        th {
            background-color: #f2f2f2;
        }
        .highlight {
            background-color: yellow;
        }
        #result {
            text-align: center;
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
    <script>
        function highlightCell(cell, row, col) {
            // Menghapus highlight dari semua sel
            var cells = document.querySelectorAll('td');
            cells.forEach(function(c) {
                c.classList.remove('highlight');
            });
            // Menambahkan highlight pada sel yang dipilih
            cell.classList.add('highlight');

            // Menampilkan hasil perkalian
            var result = document.getElementById('result');
            result.innerHTML = "Hasil: " + row + " x " + col + " = " + (row * col);
        }
    </script>
</head>
<body>

<h2 style="text-align: center;">Tabel Perkalian 10x10 Interaktif</h2>
<table>
    <tr>
        <th>x</th>
        <?php for ($i = 1; $i <= 10; $i++): ?>
            <th><?php echo $i; ?></th>
        <?php endfor; ?>
    </tr>
    <?php for ($i = 1; $i <= 10; $i++): ?>
        <tr>
            <th><?php echo $i; ?></th>
            <?php for ($j = 1; $j <= 10; $j++): ?>
                <td onclick="highlightCell(this, <?php echo $i; ?>, <?php echo $j; ?>)"><?php echo $i * $j; ?></td>
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>

<div id="result">Hasil: </div>

</body>
</html>