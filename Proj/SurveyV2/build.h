#ifndef BUILD_H
#define BUILD_H

#include <QWidget>

class QuestionBlock;

namespace Ui {
class Build;
}

class Build : public QWidget
{
    Q_OBJECT

public:
    explicit Build(QWidget *parent = 0);
    ~Build();
    void fillBuild();
    int findFirst();
    void addTo(int);

private slots:
    void on_addQ_clicked();

private:
    Ui::Build *ui;
    bool *hold;
    QuestionBlock **group;
    int total;
};

#endif // BUILD_H
