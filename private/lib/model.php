<?php
abstract class Model
{
    protected $conn;
    protected $stmt;

    public function __construct()
    {
        try {
            $this->conn = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
            //accent
            $this->query("SET NAMES 'utf8'");
            $this->execute();
        } catch (PDOException $e) {
            echo 'Hubo un error al intentar conectar con la base de datos. Si el error le afecta, por favor, póngase en contacto con nosotros desde la sección de contacto';
        }
    }

    public function query($query)
    {
        $this->stmt = $this->conn->prepare($query);
    }

    public function bind($param, $value, $type = null)
    {
        if (is_null($type)) {
            switch (true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default;
                    $type = PDO::PARAM_STR;
                    break;
            }
        }
        $this->stmt->bindValue($param, $value, $type);
    }

    public function execute()
    {
        $this->stmt->execute();
    }

    public function resultset()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function singleRow()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function lastInsertId()
    {
        return $this->conn->lastInsertId();
    }

    public function __destruct()
    {
        $this->conn = null;
        $this->stmt = null;
    }
}
