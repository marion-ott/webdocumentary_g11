<?php
header("Access-Control-Allow-Origin: *");
/**
 * Connexion vers la base de données
 */
try {
    $pdo = new PDO('mysql:host=localhost;dbname=fil_rouge;port=3307', 'root','');
} catch (PDOException $exception) {
    die($exception->getMessage());
}
$pdo->exec('SET NAMES UTF8');
