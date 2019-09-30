<?php

class SeedModel extends Model
{
    /**
     * Create database.
     */
    public function index()
    {
        if (file_exists('inv_tooldb.sql')) {
            try {
                $this->query('SELECT * FROM kit_components');
                $kit_components = $this->resultset();
                $this->query('SELECT * FROM log');
                $log = $this->resultset();
                $this->query('SELECT * FROM roles');
                $roles = $this->resultset();
                $this->query('SELECT * FROM stock');
                $stock = $this->resultset();
                $this->query('SELECT * FROM stock_transaction');
                $stock_transaction = $this->resultset();
                $this->query('SELECT * FROM transaction');
                $transaction = $this->resultset();
                $this->query('SELECT * FROM users');
                $users = $this->resultset();
            } catch (\PDOException $e) {}

            if (
                sizeof($kit_components) <= 0 &&
                sizeof($log) <= 0 &&
                sizeof($roles) <= 0 &&
                sizeof($stock) <= 0 &&
                sizeof($stock_transaction) <= 0 &&
                sizeof($transaction) <= 0 &&
                sizeof($users) <= 0
            ) {
                $sql = file_get_contents(ROOT_URL . '/inv_tooldb.sql');
                $this->exec($sql);
            }
        }
    }

    /**
     * Seed database with administrator.
     */
    public function admin()
    {
        // Find all users
        $this->query('SELECT * FROM users');
        $users = $this->resultset();

        // Only insert if there are no users
        if (sizeof($users) <= 0) {
            // Find all records
            $this->query('INSERT INTO users (name, username, email, password, role_id, status, created_at) VALUES (:name, :username, :email, :password, :role_id, :status, :created_at)');
            $this->bind(':name', ADMIN_NAME);
            $this->bind(':username', ADMIN_USERNAME);
            $this->bind(':email', ADMIN_EMAIL);
            $this->bind(':password', password_hash(ADMIN_PASSWORD, PASSWORD_BCRYPT, ['cost' => 12]));
            $this->bind(':role_id', '1');
            $this->bind(':status', '1');
            $this->bind(':created_at', Functions::now());
            $this->execute();
        }
    }
}
