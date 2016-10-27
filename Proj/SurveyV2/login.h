#ifndef LOGIN_H
#define LOGIN_H

#include <QDialog>
#include <QMainWindow>

namespace Ui {
class Login;
}

class Login : public QDialog
{
    Q_OBJECT

public:
    explicit Login(QWidget *parent = 0);
    ~Login();

private slots:
    void on_submit_clicked();

private:
    Ui::Login *ui;
    QMainWindow *main;
};

#endif // LOGIN_H
