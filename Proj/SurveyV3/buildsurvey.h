#ifndef BUILDSURVEY_H
#define BUILDSURVEY_H

#include <QWidget>

namespace Ui {
class buildSurvey;
}

class buildSurvey : public QWidget
{
    Q_OBJECT

public:
    explicit buildSurvey(QWidget *parent = 0);
    ~buildSurvey();

private slots:
    void on_checkBox_clicked(bool checked);

private:
    Ui::buildSurvey *ui;
};

#endif // BUILDSURVEY_H
