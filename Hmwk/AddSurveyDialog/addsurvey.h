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

private:
    Ui::addsurvey *ui;
};

#endif // ADDSURVEY_H
