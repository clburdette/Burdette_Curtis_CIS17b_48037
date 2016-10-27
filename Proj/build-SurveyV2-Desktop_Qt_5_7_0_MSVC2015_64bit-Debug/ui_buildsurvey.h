/********************************************************************************
** Form generated from reading UI file 'buildsurvey.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_BUILDSURVEY_H
#define UI_BUILDSURVEY_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QDialog>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_buildSurvey
{
public:
    QGridLayout *gridLayout;
    QPushButton *pushButton;
    QPushButton *pushButton_3;
    QPushButton *pushButton_2;
    QPushButton *pushButton_4;
    QPushButton *pushButton_5;
    QPushButton *pushButton_6;
    QPushButton *pushButton_7;
    QPushButton *pushButton_8;
    QPushButton *pushButton_9;

    void setupUi(QDialog *buildSurvey)
    {
        if (buildSurvey->objectName().isEmpty())
            buildSurvey->setObjectName(QStringLiteral("buildSurvey"));
        buildSurvey->resize(1276, 825);
        gridLayout = new QGridLayout(buildSurvey);
        gridLayout->setObjectName(QStringLiteral("gridLayout"));
        pushButton = new QPushButton(buildSurvey);
        pushButton->setObjectName(QStringLiteral("pushButton"));

        gridLayout->addWidget(pushButton, 0, 0, 1, 1);

        pushButton_3 = new QPushButton(buildSurvey);
        pushButton_3->setObjectName(QStringLiteral("pushButton_3"));

        gridLayout->addWidget(pushButton_3, 0, 1, 1, 1);

        pushButton_2 = new QPushButton(buildSurvey);
        pushButton_2->setObjectName(QStringLiteral("pushButton_2"));

        gridLayout->addWidget(pushButton_2, 1, 1, 1, 1);

        pushButton_4 = new QPushButton(buildSurvey);
        pushButton_4->setObjectName(QStringLiteral("pushButton_4"));

        gridLayout->addWidget(pushButton_4, 2, 0, 1, 1);

        pushButton_5 = new QPushButton(buildSurvey);
        pushButton_5->setObjectName(QStringLiteral("pushButton_5"));

        gridLayout->addWidget(pushButton_5, 3, 1, 1, 1);

        pushButton_6 = new QPushButton(buildSurvey);
        pushButton_6->setObjectName(QStringLiteral("pushButton_6"));

        gridLayout->addWidget(pushButton_6, 4, 1, 1, 1);

        pushButton_7 = new QPushButton(buildSurvey);
        pushButton_7->setObjectName(QStringLiteral("pushButton_7"));

        gridLayout->addWidget(pushButton_7, 5, 0, 1, 1);

        pushButton_8 = new QPushButton(buildSurvey);
        pushButton_8->setObjectName(QStringLiteral("pushButton_8"));

        gridLayout->addWidget(pushButton_8, 6, 1, 1, 1);

        pushButton_9 = new QPushButton(buildSurvey);
        pushButton_9->setObjectName(QStringLiteral("pushButton_9"));

        gridLayout->addWidget(pushButton_9, 7, 1, 1, 1);


        retranslateUi(buildSurvey);

        QMetaObject::connectSlotsByName(buildSurvey);
    } // setupUi

    void retranslateUi(QDialog *buildSurvey)
    {
        buildSurvey->setWindowTitle(QApplication::translate("buildSurvey", "Dialog", 0));
        pushButton->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_3->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_2->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_4->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_5->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_6->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_7->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_8->setText(QApplication::translate("buildSurvey", "PushButton", 0));
        pushButton_9->setText(QApplication::translate("buildSurvey", "PushButton", 0));
    } // retranslateUi

};

namespace Ui {
    class buildSurvey: public Ui_buildSurvey {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_BUILDSURVEY_H
