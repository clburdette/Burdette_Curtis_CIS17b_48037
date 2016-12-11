#ifndef ADDSURVEY_H
#define ADDSURVEY_H

#include <QDialog>

namespace Ui {
class AddSurvey;
}

class AddSurvey : public QDialog
{
    Q_OBJECT

public:
    explicit AddSurvey(QWidget *parent = 0);
    ~AddSurvey();

private:
    Ui::AddSurvey *ui;
};

#endif // ADDSURVEY_H
