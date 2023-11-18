<?php


$conn = new mysqli("sql109.infinityfree.com", "if0_34787829", "uN4pMjEPqiNlg", "if0_34787829_ppi2023agoravai");

if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

$id = $_POST['id'];
$nome = $_POST['editNome'];
$nomec = $_POST['editNomeCientifico'];
$genero = $_POST['editGenero'];
$familia = $_POST['editFamilia'];

//PEGAR os DADOS QUANDO FOR ENVIADO
// Exemplo de instrução UPDATE (substitua pelos seus próprios dados)


$updateQuery = "UPDATE plants
SET
    common_name = $nome,
    scientific_name = $nomec,
    family = $familia,
    genus = $genero
WHERE
    id = $id;";


//$query = $conn->prepare("UPDATE plants
//SET
//    common_name = ?,
//    scientific_name = ?,
//    family = ?,
//    genus = ?
//WHERE
//    id = ?;");
//$query->bind_param("ii", $moedaOrigem, $moedaDestino);
//$query->execute();
//$resultado = $query->get_result()->fetch_assoc();

// Executa a instrução UPDATE
if ($conn->query($updateQuery) === TRUE) {
    echo "Atualização bem-sucedida!";
} else {
    echo "Erro na atualização: " . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();

