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


$array = [];
while (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :
    array_push($array, $row);
endwhile;

echo json_encode($array);