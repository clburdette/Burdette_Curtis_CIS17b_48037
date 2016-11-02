#ifndef PAY_H
#define PAY_H

#include <QDialog>

namespace Ui {
class Pay;
}

class Pay : public QDialog
{
    Q_OBJECT

public:
    explicit Pay(QWidget *parent = 0);
    ~Pay();

private:
    Ui::Pay *ui;
};

#endif // PAY_H
