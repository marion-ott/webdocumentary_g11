<?php
include "connection.php";

$sql = "SELECT
    `id`,
    `content`
    FROM
    `content`
    ;";
$stmt = $pdo->prepare($sql);
$stmt->execute();


while (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :?>
        <tr>
            <td><?php echo $row["id"] ?></td>
            <td><?php echo $row["content"] ?></td>
        </tr>
    <?php
endwhile;
