#ifndef ADDSURVEY_H
#define ADDSURVEY_H

#include <QDialog>

namespace Ui {
class addsurvey;
}

class addsurvey : public QDialog
{
    Q_OBJECT

public:
    explicit addsurvey(QWidget *parent = 0);
    ~addsurvey();

signals:
    void sendNewQ(QString,QString,QString,QString,QString);

private slots:
    void on_b_clicked();

    void on_a_clicked();

private:
    Ui::addsurvey *ui;
};

#endif // ADDSURVEY_H
