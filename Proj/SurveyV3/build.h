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
    void fillHold();
    int findFirst();
    void addTo(int);
    void sortQuestions();
    void sortBlock();

signals:
    void sendBack(QuestionBlock*[]);

private slots:
    void on_addQ_clicked();

    void on_addQ_2_clicked();

private:
    int SIZE = 20;
    Ui::Build *ui;
    bool hold[20];
    QuestionBlock *block[20];
    int total;
};

#endif // BUILD_H
