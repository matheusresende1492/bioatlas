<?php

$conn = new mysqli("sql109.infinityfree.com", "if0_34787829", "uN4pMjEPqiNlg", "if0_34787829_ppi2023agoravai");

if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

$query = $conn->query("SELECT * FROM plants");
$plants = $query->fetch_all(MYSQLI_ASSOC);

echo json_encode($plants);
